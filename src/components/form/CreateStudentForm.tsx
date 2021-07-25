import React, { useState } from 'react';
import { FormInput } from 'components/input';
import { OButton } from 'components/button';

export const CreateStudentForm: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rollNo, setRollNo] = useState<string>('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setRollNo('');
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('Submit form');

    // const target = event.target as typeof event.target & {
    //   email: { value: string };
    //   password: { value: string };
    // };

    // const email = target.email.value;
    // const password = target.password.value;
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
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
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
