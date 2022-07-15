import React from "react";
import cx from "clsx";
import { RiLoader4Line } from "react-icons/ri";

const Button = (props) => {
  const {
    className,
    color = "primary",
    size = "lg",
    variant = "pill",
    icon = null,
    avatar = null,
    iconPlacement = "left",
    btnText = "Select",
    loading,
    children,
    disable,
    ...rest
  } = props;
  return (
    <>
      {!!props.errorMsg && props.errorType !== "icon" && <p className={"invalid-error " + props.errorClassName}>{props.errorMsg}</p>}
      <button
        className={cx("btn", `btn-${color}`, `btn-${size}`, `btn-${variant}`, variant === "pill" && "btn-wide", className)}
        type="button"
        disabled={disable}
        {...rest}
      >
        {avatar && avatar}
        {iconPlacement === "left" && icon}
        {btnText && !children && <div className="text">{btnText}</div>}
        {iconPlacement === "right" && icon}
        {children}
        {loading && <RiLoader4Line className="icon-spin" size="1.4em" style={{ marginInline: "8px -4px" }} />}
      </button>
    </>
  );
};

export default Button;
