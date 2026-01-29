import React, { useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";

const Button = React.memo(
  ({
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
    /* ===============================
       CLASSES (MEMOIZED)
    =============================== */

    const classes = useMemo(
      () => `btn btn-${variant} btn-${size} ${className}`.trim(),
      [variant, size, className]
    );

    /* ===============================
       CLICK GUARD
    =============================== */

    const handleClick = useCallback(
      (e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }

        onClick?.(e);
      },
      [disabled, onClick]
    );

    /* ===============================
       LINK BUTTON
    =============================== */

    if (to) {
      return (
        <NavLink
          to={disabled ? "#" : to}
          className={classes}
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          {...rest}
        >
          {children}
        </NavLink>
      );
    }

    /* ===============================
       REGULAR BUTTON
    =============================== */

    return (
      <button
        type={type}
        className={classes}
        onClick={handleClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
