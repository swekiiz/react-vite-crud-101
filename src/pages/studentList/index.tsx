import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Desktop from 'layouts/DesktopWrapper';
import { StudentTableHeader } from 'components/headerTable';
import { Row } from 'components/studentRow';
import { IStudent } from 'types/student';

// import { studentList } from 'mock/student';

interface IStudentList {}

const StudentList: React.FC<IStudentList> = ({}: IStudentList): JSX.Element => {
  const [studentList, setStudentList] = useState<Array<IStudent> | null>(null);

  const fetch = async () => {
    const result = await axios.get('http://localhost:4000/student');
    setStudentList(result.data as Array<IStudent>);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Desktop title="Student List">
      <section className="flex flex-col items-center justify-start m-0 p-8">
        <StudentTableHeader />
        {studentList?.map((item, key) => (
          <Row key={key} fetch={fetch} {...item} />
        ))}
      </section>
    </Desktop>
  );
};

export default StudentList;
