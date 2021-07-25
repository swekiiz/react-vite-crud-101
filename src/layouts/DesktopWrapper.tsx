import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
interface IDesktopWrapper {
  children?: ReactNode;
  title?: string;
}

const DesktopWrapper: React.FC<IDesktopWrapper> = ({
  children,
  title,
}: IDesktopWrapper): JSX.Element => {
  return (
    <div className="bg-dark px-16 py-4 w-screen min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'crud-101'}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default DesktopWrapper;
