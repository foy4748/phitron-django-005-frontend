"use client";
import { ColumnDef } from "@tanstack/react-table";
import { TSingleProduct } from "@/types/product";
import Image from "next/image";
import moment from "moment";
import { ProductUpdateModal } from "./ProductUpdateModal";
import DeleteProductButton from "@/app/products/[id]/components/DeleteProductButton";
export const columns: ColumnDef<TSingleProduct>[] = [
  {
    accessorKey: "product_name",
    header: "Name",
  },
  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.image_url}
          width={50}
          height={50}
          alt={row.original.product_name}
        />
      );
    },
  },
  {
    accessorKey: "unit_price",
    header: "Unit Price",
  },
  {
    accessorKey: "unit_name",
    header: "Unit Name",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const { category } = row.original.category;
      return <>{category}</>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <>{moment(created_at).fromNow()}</>;
    },
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: ({ row }) => {
      const { updated_at } = row.original;
      return <>{moment(updated_at).fromNow()}</>;
    },
  },
  {
    header: "Delete",
    cell: ({ row }) => {
      return (
        <>
          <DeleteProductButton product_id={row.original.id} isAdminOnly />
        </>
      );
    },
  },
  {
    header: "Update",
    cell: ({ row }) => {
      return (
        <>
          <ProductUpdateModal product_id={row.original.id} />
        </>
      );
    },
  },
];
