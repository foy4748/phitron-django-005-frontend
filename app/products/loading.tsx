import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
const Loading = ({
  cardsNumber,
  className,
}: {
  cardsNumber?: number;
  className?: string;
}) => {
  const repeat = (arr: number[], n: number) =>
    Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
  return (
    <>
      <GridSystem className={cn("gap-y-8", className)}>
        {repeat(Array.from(Array(cardsNumber || 12).keys()), 1).map(
          (_, idx) => (
            <Col key={idx} className="flex justify-center">
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </Col>
          )
        )}
      </GridSystem>
    </>
  );
};

export default Loading;
