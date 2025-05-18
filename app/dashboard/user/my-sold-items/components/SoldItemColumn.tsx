"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import moment from "moment";
import { TpurchaseProduct } from "@/types/purchaseHistory";
export const columns: ColumnDef<TpurchaseProduct>[] = [
  {
    accessorKey: "product.product_name",
    header: "Name",
  },
  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.product.image_url}
          width={50}
          height={50}
          alt={row.original.product.product_name}
        />
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const { category } = row.original.product.category;
      return <>{category}</>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Ordered at",
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <>{moment(created_at).fromNow()}</>;
    },
  },
  {
    accessorKey: "unit_price",
    header: "Unit Price",
  },
  {
    accessorKey: "quantity",
    header: "Quanitity",
  },
  {
    accessorKey: "unit_name",
    header: "Unit Name",
  },
  {
    header: "Cost (BDT)",
    cell: ({ row }) => {
      const cost =
        Number(row.original.quantity) * Number(row.original.unit_price);
      return <>{cost}</>;
    },
  },
];
