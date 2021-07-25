import React, { useState } from 'react';
import { FormInput } from 'components/input';

export const CreateStudentForm: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rollNo, setRollNo] = useState<string>('');

  const handleSubmit = () => {};

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
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </form>
    </div>
  );
};
