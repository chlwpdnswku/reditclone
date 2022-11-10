import Link from 'next/link';
import React from 'react';

const register = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col items-center justify-center h-screen p-6'>
        <div className='w-10/12 mx-auto md:w-96'>
          <h1 className='mb-2 text-lg font-medium'>회원가입</h1>
          <form>
            <button className='w-full py-2 mb-1 text-xs font-bold'>
              Sign Up
            </button>
          </form>
          <small>
            이미 가입 하셨나요?
            {/* a태그 오류 */}
            <Link href='/login' className=''>
              로그인
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default register;
