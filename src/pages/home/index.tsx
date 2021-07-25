import React from 'react';
import { OButton } from 'components/button';
import Desktop from 'layouts/DesktopWrapper';

interface IHome {}

const Home: React.FC<IHome> = ({}: IHome): JSX.Element => {
  return (
    <Desktop title="home">
      <h1 className="text-center text-white text-4xl">hello</h1>
      <OButton className="px-4">click </OButton>
    </Desktop>
  );
};

export default Home;
