import { cn } from "@/lib/utils";
import { IClsAndChild } from "@/types/clsAndChild";

const Col = ({ className, children }: IClsAndChild) => {
  return (
    <>
      <div className={cn("col-span-12 md:col-span-6 lg:col-span-3", className)}>
        {children}
      </div>
    </>
  );
};

export default Col;
