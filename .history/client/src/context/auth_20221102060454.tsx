import React, { createContext, useReducer } from 'react';
import { User } from '../types';

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

// 유저 update 할때에 state만들기
interface Action {
  type: string;
  payload: any;
}

const DispatchContext = createContext<any>(null);

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    default:
  }
};

// children이 Component가 되는거임 !
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
