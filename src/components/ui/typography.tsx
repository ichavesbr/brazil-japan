import * as React from "react";

import { cn } from "@/lib/utils";

const HDisplay = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h1>
  );
});
HDisplay.displayName = "HDisplay";

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h1>
  );
});
H1.displayName = "H1";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h2>
  );
});
H2.displayName = "H2";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  );
});
H3.displayName = "H3";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h4>
  );
});
H4.displayName = "H4";

const H5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h5>
  );
});
H5.displayName = "H5";

const H6 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h6>
  );
});
H6.displayName = "H6";

const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});
P.displayName = "P";

const PSmall = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      className={cn("text-sm leading-none font-medium", className)}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});
PSmall.displayName = "PSmaill";

const PTiny = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      className={cn("leading-7 text-xs [&:not(:first-child)]:mt-6", className)}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});
PTiny.displayName = "PTiny";

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, children, ...props }, ref) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      ref={ref}
      {...props}
    >
      {children}
    </blockquote>
  );
});
Blockquote.displayName = "Blockquote";

export { HDisplay, H1, H2, H3, H4, H5, H6, P, PSmall, PTiny, Blockquote };
