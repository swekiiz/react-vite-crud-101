import React from 'react';
import Desktop from 'layouts/DesktopWrapper';

interface IStudentList {}

const StudentList: React.FC<IStudentList> = ({}: IStudentList): JSX.Element => {
  return <Desktop title="Student List">Student List</Desktop>;
};

export default StudentList;
