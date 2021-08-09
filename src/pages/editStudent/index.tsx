import React from 'react';
import Desktop from 'layouts/DesktopWrapper';
import { EditStudentForm } from 'components/form/EditStudentForm';

interface IEditStudent {}

const EditStudent: React.FC<IEditStudent> = ({}: IEditStudent): JSX.Element => {
  return (
    <Desktop title="edit-student">
      <div className="flex justify-center mt-16 w-full">
        <EditStudentForm />
      </div>
    </Desktop>
  );
};

export default EditStudent;
