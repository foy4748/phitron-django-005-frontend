import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/actions/product/deleteSpecificProduct";
import { toast } from "@/hooks/use-toast";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
type PropTypes = {
  product_id: number | `${number}`;
  setIsDialogOpen?: Dispatch<SetStateAction<boolean>>;
};
export default function DeleteProductButton({
  product_id,
  setIsDialogOpen,
}: PropTypes) {
  const pathname = usePathname();
  const isAdminOnly = pathname.startsWith("/dashboard/admin");
  const handleDelete = async (id: number | `${number}`) => {
    try {
      const { success } = await deleteProduct(Number(String(id)), isAdminOnly);
      if (setIsDialogOpen) setIsDialogOpen(false);
      if (success) {
        // Toaster
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Deleted Product Successfully</code>
            </pre>
          ),
        });
      } else {
        toast({
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">FAILED to Deleted Product</code>
            </pre>
          ),
        });
      }
    } catch (error) {
      console.log(error);
      // Toaster
      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">FAILED to Deleted Product</code>
          </pre>
        ),
      });
    }
  };
  return (
    <>
      <Button
        type="button"
        variant={"destructive"}
        onClick={() => handleDelete(Number(String(product_id)))}
      >
        Delete Product
      </Button>
    </>
  );
}
