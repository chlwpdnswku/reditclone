import React, { createContext, useContext, useReducer } from 'react';
import { User } from '../types';

// 인터페이스 타입스크립트를 지정해줌흠 .
interface State {
  authenticated: boolean;
  //   유저정보가 없을 떄
  user: User | undefined;
  loading: boolean;
}

// context를 만들기
const StateContext = createContext<State>({
  authenticated: false,
  user: undefined,
  loading: true,
});

const DispatchContext = createContext<any>(null);

// type로그인 일때 payload안에 유저정보를 준다
interface Action {
  type: string;
  payload: any;
}
// 여기서 가져와야 좀뭔가 되네 Action이란 인터페이스를준다
const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        user: payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error(`Unknown Action Type ${type}`);
  }
};

// children이 Component가 되는거임 !
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    user: null,
    loading: true,
    authenticated: false,
  });

  console.log('state', state);
  const dispatch = (type: string, payload: any) => {
    defaultDispatch({ type, payload });
  };

  // Provider로 감싸주는건데 이게
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

// 다른파일에서 사용이 가능하게 export
export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
