import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import { FormInput } from 'components/input';
import { OButton } from 'components/button';

type paramsType = {
  id: string;
};

export const EditStudentForm: React.FC = (): JSX.Element => {
  const { id } = useParams<paramsType>();
  const history = useHistory();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rollNo, setRollNo] = useState<number | ''>('');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/edit-student/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setRollNo(res.data.rollNo);
      })
      .catch((error) => console.log(error));
  }, [history]);

  const handleRollNoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^[0-9\b]+$/.test(value)) setRollNo(Number(value));
    else if (value === '') setRollNo(value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const studentObject = {
      name,
      email,
      rollNo,
    };

    axios
      .put(`http://localhost:4000/student/update-student/${id}`, studentObject)
      .then((res) => console.log(res.data));

    history.push('/student-list');
  };

  const inputClassStyle = 'my-2';

  return (
    <div className="w-full sm:w-9/12 lg:w-5/12">
      <form onSubmit={handleSubmit}>
        <FormInput
          className={inputClassStyle}
          label="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          className={inputClassStyle}
          label="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          className={inputClassStyle}
          label="roll no"
          type="text"
          pattern="[0-9]*"
          value={rollNo}
          onInput={handleRollNoOnChange}
        />
        <div className="flex w-full">
          <OButton type="submit" className="ml-auto mr-4 mt-4 px-4">
            Update
          </OButton>
        </div>
      </form>
    </div>
  );
};
