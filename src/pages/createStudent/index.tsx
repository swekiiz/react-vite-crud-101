import React from 'react';
import Desktop from 'layouts/DesktopWrapper';
import { CreateStudentForm } from 'components/form';

interface ICreateStudent {}

const CreateStudent: React.FC<ICreateStudent> = ({}: ICreateStudent): JSX.Element => {
  return (
    <Desktop title="Create Student">
      <div className="flex justify-center w-full mt-16">
        <CreateStudentForm />
      </div>
    </Desktop>
  );
};

export default CreateStudent;
