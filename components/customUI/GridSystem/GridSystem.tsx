import { cn } from "@/lib/utils";
import { IClsAndChild } from "@/types/clsAndChild";

const GridSystem = ({ className, children }: IClsAndChild) => {
  return (
    <>
      <section className={cn("grid grid-cols-12 gap-4", className)}>
        {children}
      </section>
    </>
  );
};

export default GridSystem;
