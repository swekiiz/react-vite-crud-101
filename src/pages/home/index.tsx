import React from 'react';

interface IHome {}

const Home: React.FC<IHome> = ({}: IHome): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-800">
      <h1 className="text-center text-white text-4xl">Hello world</h1>
    </div>
  );
};

export default Home;
