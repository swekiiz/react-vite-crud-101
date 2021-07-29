import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from 'components/navbar';

interface IDesktopWrapper {
  children?: ReactNode;
  title?: string;
}

const DesktopWrapper: React.FC<IDesktopWrapper> = ({ children, title }: IDesktopWrapper): JSX.Element => {
  return (
    <div className="px-16 w-screen min-h-screen text-white text-base bg-dark">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'crud-101'}</title>
      </Helmet>
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default DesktopWrapper;
