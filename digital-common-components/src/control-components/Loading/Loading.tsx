import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { IComponentBaseProps, ComponentColor, ComponentSize } from "../types.ts";

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  IComponentBaseProps & {
    size?: ComponentSize;
    color?: ComponentColor;
    variant?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
  };

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  (
    { size, variant = "spinner", color, dataTheme, className, style, ...props },
    ref,
  ) => {
    const classes = twMerge(
      "dui-loading",
      className,
      clsx({
        "dui-loading-lg": size === "lg",
        "dui-loading-md": size === "md",
        "dui-loading-sm": size === "sm",
        "dui-loading-xs": size === "xs",
        "dui-loading-spinner": variant === "spinner",
        "dui-loading-dots": variant === "dots",
        "dui-loading-ring": variant === "ring",
        "dui-loading-ball": variant === "ball",
        "dui-loading-bars": variant === "bars",
        "dui-loading-infinity": variant === "infinity",
        "text-primary": color === "primary",
        "text-secondary": color === "secondary",
        "text-accent": color === "accent",
        "text-info": color === "info",
        "text-success": color === "success",
        "text-warning": color === "warning",
        "text-error": color === "error",
        "text-ghost": color === "ghost",
      }),
    );

    return (
      <span
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={style}
      />
    );
  },
);

Loading.displayName = "dui-loading";

export default Loading;
