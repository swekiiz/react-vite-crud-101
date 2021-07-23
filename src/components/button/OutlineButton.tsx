import React, { ReactNode } from 'react';

type addProps = {
  children?: ReactNode;
  className?: string;
  style?: { [key: string]: string | number };
  width?: string;
  height?: string;
  active?: boolean;
  size?: 'big' | 'medium' | 'small';
};

export type OutlineButtonPropsType = addProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const OutlineButton: React.FC<OutlineButtonPropsType> = ({
  children,
  className,
  style,
  width,
  height,
  active,
  onClick,
  size,
  ...rest
}: OutlineButtonPropsType): JSX.Element => {
  const padding = {
    big: 'py-2',
    medium: 'py-1',
    small: 'py-0',
  };

  return (
    <button
      style={{ width: width || 'auto', height: height || 'auto', ...style }}
      className={`${className} text-center rounded-full text-sm
      lg:text-md font-medium transition-all duration-200 ease-in-out ${
        size ? padding[size] : padding['medium']
      }
    `}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};