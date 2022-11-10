import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import InputGroup from '../components/InputGroup';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
  // 처음에 state를 만들어준다
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 원래의 동작을 막아줌 요청이오면 res
    //이요청이끝날때까지 기다려주는 비동기
    try {
      const res = await axios.post('/auth/register', {
        email,
        password,
        username,
      });
      console.log('res', res);
      router.push('/login');
    } catch (error) {
      console.error(error);
      setErrors();
    }
  };

  return (
    <div className='bg-white'>
      <div className='flex flex-col items-center justify-center h-screen p-6'>
        <div className='w-10/12 mx-auto md:w-96'>
          <h1 className='mb-2 text-lg font-medium'>회원가입</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup
              placeholder='Email'
              value={email}
              setValue={setEmail}
              error={errors.email}
            />
            <InputGroup
              placeholder='Username'
              value={username}
              setValue={setUsername}
              error={errors.username}
            />{' '}
            <InputGroup
              placeholder='Password'
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <button className='w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded'>
              Sign Up
            </button>
          </form>
          <small>
            이미 가입 하셨나요?
            {/* a태그 오류 */}
            <Link href='/login' className='ml-1 text-blue-500 uppercase'>
              로그인
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
