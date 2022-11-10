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
    <div className=''>
      <div className=''>
        <h1 className=''>커뮤니티 만들어보자</h1>
        <hr />
        <form>
          <p>Name</p>
          <p>대문자 포함한 커뮤니티 이름 변경 안됨</p>
          <InputGroup />
          <InputGroup />

          <InputGroup />
        </form>
      </div>
    </div>
  );
};

export default Subcreate;
