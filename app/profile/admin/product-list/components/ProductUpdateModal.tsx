import AddOrUpdateProduct from "@/app/products/add/components/AddOrUpdateProduct";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export function ProductUpdateModal({
  product_id,
}: {
  product_id: number | `${number}`;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Update Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh]">
          <AddOrUpdateProduct
            editMode
            isAdminOnly
            product_id={product_id}
            setIsDialogOpen={setIsDialogOpen}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
