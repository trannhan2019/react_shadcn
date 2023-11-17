import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const InputPassword = React.forwardRef(({ className, ...props }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        {show ? (
          <EyeOpenIcon
            onClick={() => setShow(false)}
            className="cursor-pointer"
          />
        ) : (
          <EyeClosedIcon
            className="cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
      </div>
    </div>
  );
});

export { InputPassword };
