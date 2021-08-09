import React, { useState } from 'react';
import { FormInput } from 'components/input';
import { OButton } from 'components/button';
import axios from 'axios';

export const CreateStudentForm: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rollNo, setRollNo] = useState<number | ''>('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setRollNo('');
  };

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

    axios.post('http://localhost:4000/student/create-student', studentObject).then((res) => console.log(res.data));

    resetForm();
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
            Submit
          </OButton>
        </div>
      </form>
    </div>
  );
};
