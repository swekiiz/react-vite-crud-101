import React from 'react';
import { IStudent } from 'types/student';

export interface IRow extends IStudent {
  highlight?: boolean;
}
export const Row: React.FC<IRow> = ({ name, rollNo, email, highlight }: IRow) => {
  return (
    <div className="flex flex-row mb-8 py-4 w-full bg-darkest rounded-lg">
      <div className="w-2/12 text-center text-secondary text-xl font-bold">{rollNo}</div>
      <div className="w-4/12 text-center text-tertiary text-lg font-semibold">{email}</div>
      <div className="w-3/12 text-center text-tertiary text-lg font-semibold">{name}</div>
      <div className="w-3/12 text-center text-lg font-semibold">hello</div>
    </div>
  );
};
