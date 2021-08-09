import React from 'react';
import Desktop from 'layouts/DesktopWrapper';
import { StudentTableHeader } from 'components/headerTable';
import { Row } from 'components/studentRow';

import { studentList } from 'mock/student';

interface IStudentList {}

const StudentList: React.FC<IStudentList> = ({}: IStudentList): JSX.Element => {
  return (
    <Desktop title="Student List">
      <section className="m-0 p-8">
        <StudentTableHeader />
        <div className="px-8 w-full">
          {studentList.map((item, key) => (
            <Row key={key} {...item} />
          ))}
        </div>
      </section>
    </Desktop>
  );
};

export default StudentList;
