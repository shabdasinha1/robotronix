import React from "react";
import { NavLink } from "react-router-dom";


const Button = ({
  to,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  children,
  onClick,
  disabled = false,
  ...rest
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();


  if (to) {
    return (
      <NavLink
        to={to}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {children}
      </NavLink>
    );
  }

 
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
