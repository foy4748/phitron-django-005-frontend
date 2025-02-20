import LoadingSpinner from "@/components/customUI/LoadingSpinner";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePageLoading() {
  return (
    <div className="flex flex-col space-y-3">
      <LoadingSpinner size={"large"} className="my-12" />
      <Skeleton className="min-h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-10 w-3/4" />
      </div>
    </div>
  );
}
