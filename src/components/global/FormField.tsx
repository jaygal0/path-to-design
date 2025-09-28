import React, { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  children,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
