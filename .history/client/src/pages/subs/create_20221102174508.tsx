//커뮤니티 만들기
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';

const router = useRouter();

const Subcreate = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post('/subs', { name, title, description });
    } catch (error) {}
  };

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Subcreate;