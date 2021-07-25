import React from 'react';

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const FormInput: React.FC<IFormInput> = ({
  className,
  label = '',
  ...rest
}: IFormInput): JSX.Element => {
  return (
    <div className={className}>
      <label>
        <span className="text-primary block mb-1 pl-4 text-left text-sm">{label}:</span>
        <input
          className={`w-full px-4 py-1 bg-darkest border outline-none border-darkest focus:border-primary rounded-lg text-base text-tertiary`}
          {...rest}
        />
      </label>
    </div>
  );
};

export default FormInput;
