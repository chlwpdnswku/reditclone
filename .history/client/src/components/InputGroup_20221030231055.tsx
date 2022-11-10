import React from 'react';
//이게 음
import cls from 'classnames';
// ?는 클래스가 들어올수있고안들어올수 있고하는 옵션임
// Props를넣어주는이유는 props로 내려주고있어서그럼 재사용때문
interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  //   string을받는데 리턴갑 void
  setValue: (str: string) => void;
}

//클래스네임이 들어오지않으면 기본값을 설정 mb-2 간격이띄어지니까
const InputGroup: React.FC<InputGroupProps> = ({
  className = 'mb-2',
  type = 'text',
  placeholder = '',
  error,
  value,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        className='w-full border p-3 duration-200 border-gray-400 rounded bg-gray-50 focus:bg-white '
        type={type}
        style={{ minWidth: 300 }}
        // 그니까 기본옵션들 다박아줌
        placeholder={placeholder}
        value={value}
        // setValue에 값을 바꿔주는 것
        onChange={(e) => setValue(e.target.value)}
      />
      {/* 이메일형식이 아니다라고 나오는 것임 */}
      <small className='font-medium'>{error}</small>
    </div>
  );
};

export default InputGroup;
