//커뮤니티 만들기
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import InputGroup from '../../components/InputGroup';

const Subcreate = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // 그다음 api 백엔드 생성
    try {
      const res = await axios.post('/subs', { name, title, description });
      router.push('/', `/r/${res.data.name}`);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  return (
    <div className='flex flex-col justify-center pt-16'>
      <div className='w-10/12 mx-auto md:w-96'>
        <h1 className='mb-2 text-xs text-gray-400'>커뮤니티 만들어보자</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className='my-6'>
            <p className='font-medium'>Name</p>
            <p className='mb-2 text-xs text-gray-400'>
              대문자 포함한 커뮤니티 이름 변경 안됨
            </p>
            <InputGroup
              placeholder='이름'
              value={name}
              setValue={setName}
              error={errors.name}
            />
          </div>

          <div className='my-6'>
            <p className='font-medium'>Title</p>
            <p className='mb-2 text-xs text-gray-400'>
              커뮤니티 제목은 주레를 나타냄 언제든지 변경 가능
            </p>
            <InputGroup
              placeholder='제목'
              value={title}
              setValue={setTitle}
              error={errors.title}
            />
          </div>

          <div className='my-6'>
            <p className='font-medium'>Description</p>
            <p className='mb-2 text-xs text-gray-400'>
              새로운 회원이 커뮤니티 이해하는 방법
            </p>
            <InputGroup
              placeholder='설명'
              value={description}
              setValue={setDescription}
              error={errors.description}
            />
          </div>
          <div className=''>
            <button className='px-4 py-1 text-sm font-semibold rounded text-white bg-gray-400'>
              커뮤니티 만들기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subcreate;
