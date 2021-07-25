import React from 'react';
import { OButton } from 'components/button';

interface IHome {}

const Home: React.FC<IHome> = ({}: IHome): JSX.Element => {
  return (
    <div className="bg-dark flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-center text-white text-4xl">hello</h1>
      <OButton className="px-4">click </OButton>
    </div>
  );
};

export default Home;
