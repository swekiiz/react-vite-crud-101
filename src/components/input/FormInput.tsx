import React from 'react';

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const FormInput: React.FC<IFormInput> = ({ className, label = '', ...rest }: IFormInput): JSX.Element => {
  return (
    <div className={className}>
      <label>
        <span className="block mb-1 pl-4 text-left text-primary text-sm">{label}:</span>
        <input
          className="px-4 py-1 w-full text-tertiary text-base bg-darkest border border-darkest focus:border-primary rounded-xl outline-none"
          {...rest}
        />
      </label>
    </div>
  );
};

export default FormInput;
