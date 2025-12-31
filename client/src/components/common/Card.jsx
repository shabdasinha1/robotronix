import React from "react";

/**
 * Universal Card Component
 *
 * Props:
 * - variant: "glass" | "hover" | "" (optional)
 * - size: "sm" | "md" (optional)
 * - className: extra classes (animations, layout)
 * - style: inline styles (for --delay etc.)
 * - children: card content
 */

const Card = React.memo(({
  variant = "",
  size = "md",
  className = "",
  style = {},
  children,
  ...rest
}) => {
  const classes = [
    "card",
    size && `card-${size}`,
    variant === "glass" && "card-glass",
    variant === "hover" && "card-hover",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  );
});

export default Card;
