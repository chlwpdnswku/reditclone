import Link from 'next/link';
import React from 'react';

const register = () => {
  return (
    <div className='bg-white'>
      <div className='flex'>
        <div>
          <h1>회원가입</h1>
          <form>
            <button>Sign Up</button>
          </form>
          <small>
            이미 가입 하셨나요?
            <Link href='/login'>
                <ㅁ>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default register;
