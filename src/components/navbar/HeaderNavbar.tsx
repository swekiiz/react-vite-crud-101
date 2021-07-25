import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderNavbar: React.FC = (): JSX.Element => {
  const routes = [
    {
      text: 'create student',
      path: '/create-student',
    },
    {
      text: 'student list',
      path: '/student-list',
    },
  ];

  return (
    <nav className="border-secondary px-4 w-full border-b-2">
      <div className="flex items-center justify-between">
        <div className="m-0 p-0 border-0">
          <Link to={'/'}>
            <button className="text-primary text-center text-2xl font-bold">CRUD</button>
          </Link>
        </div>
        <div>
          {routes.map(({ path, text }, key) => (
            <Link key={key} to={path}>
              <button className="text-primary hover:bg-secondary px-6 py-4 hover:text-white bg-transparent transition-all duration-200 ease-in-out">
                {text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
