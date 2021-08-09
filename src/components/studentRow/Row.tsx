import React from 'react';
import { useHistory } from 'react-router-dom';
import { OButton } from 'components/button';
import { IStudent } from 'types/student';
import axios from 'axios';

interface IRow extends IStudent {
  fetch: () => Promise<void>;
}

export const Row: React.FC<IRow> = ({ name, rollNo, email, _id, fetch }: IRow) => {
  const history = useHistory();

  const handleDelete = async () => {
    const res = await axios.delete(`http://localhost:4000/student/delete-student/${_id}`);
    console.log(res);
  };
  return (
    <div className="flex flex-row mb-8 py-4 w-full max-w-6xl bg-darkest rounded-lg">
      <div className="w-2/12 text-center text-secondary text-xl font-bold">{rollNo}</div>
      <div className="w-4/12 text-center text-tertiary text-lg font-semibold">{email}</div>
      <div className="w-3/12 text-center text-tertiary text-lg font-semibold">{name}</div>
      <div className="flex gap-4 pl-4 pr-16 w-3/12 text-center text-lg font-semibold">
        <OButton className="flex-auto" onClick={() => history.push(`/edit-student/${_id}`)}>
          edit
        </OButton>

        <OButton
          className="flex-auto"
          onClick={async () => {
            await handleDelete();
            fetch();
          }}
        >
          delete
        </OButton>
      </div>
    </div>
  );
};
