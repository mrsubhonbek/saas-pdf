import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SidebarProps = {
  children?: ReactNode;
  className?: string;
};
function Container({ children, className, ...rest }: SidebarProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      {...rest}>
      {children}
    </section>
  );
}

export default Container;
