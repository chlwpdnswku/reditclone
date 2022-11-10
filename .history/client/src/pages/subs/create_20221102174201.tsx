//커뮤니티 만들기
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const router = useRouter();

const Subcreate = () => {
  const [name, setName] = useState('');
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Subcreate;
