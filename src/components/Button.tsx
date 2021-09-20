import React, { SyntheticEvent } from "react";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      className={
        disabled
          ? "rounded my-1 px-2 bg-gray-400"
          : `rounded my-1 px-2 ${className}`
      }
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
