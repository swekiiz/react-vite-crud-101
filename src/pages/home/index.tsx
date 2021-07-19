import React from "react";

interface IHome {}

const Home: React.FC<IHome> = ({}: IHome): JSX.Element => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
      <h1 className="text-center text-4xl text-white">Hello world</h1>
    </div>
  );
};

export default Home;
