import React from 'react';

export const StudentTableHeader: React.FC = (): JSX.Element => (
  <header className="flex flex-row mb-4 w-full max-w-6xl bg-transparent border-0">
    <div className="w-2/12 text-center text-primary text-2xl font-semibold">Roll no.</div>
    <div className="w-4/12 text-center text-primary text-2xl font-semibold">E-mail</div>
    <div className="w-3/12 text-center text-primary text-2xl font-semibold">Name</div>
    <div className="w-3/12 text-center text-lg font-semibold" />
  </header>
);
