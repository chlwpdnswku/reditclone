import React from 'react';

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

//클래스네임이 들어오지않으면 기본값을 설정
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
        type={type}
        style={{}}
        // 기본옵션들 다박아줌
        placeholder={placeholder}
        value={value}
        onChange={(e) => e.target.value}
      />
      <small>{error}</small>
    </div>
  );
};

export default InputGroup;
