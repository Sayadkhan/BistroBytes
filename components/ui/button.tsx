"use client";

import React from "react";

import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVaritants = cva(
  "inline-block text-center px-6 py-3 rounded-xl border eoq font-medium active:scale-105 disabled:border-gray disabled:bg-gray disabled:text-dark/50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        dark: "border-dark bg-dark text-white hover:border-dark/90 hover:bg-dark/90",
        outline:
          "border-dark bg-transparent text-dark  hover:bg-dark hover:text-white",
      },
      size: {},
    },
    defaultVariants: {},
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVaritants> {}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVaritants({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
