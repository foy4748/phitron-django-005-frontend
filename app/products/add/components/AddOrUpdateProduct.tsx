"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addProduct } from "@/actions/product/addProduct";
import { updateProduct } from "@/actions/product/updateProduct";
import { toast } from "@/hooks/use-toast";
import useCategory from "@/hooks/useCategory";
import { getSpecifcProduct } from "@/actions/product/getSpecificProduct";
import { Dispatch, SetStateAction, useEffect } from "react";
import DeleteProductButton from "../../[id]/components/DeleteProductButton";
import { uploadPhoto } from "@/actions/uploadPhoto";

const MAX_FILE_SIZE = 0.9 * 1024 * 1024; // 900 KB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

type PropTypes = {
  editMode?: boolean | undefined;
  isAdminOnly?: boolean | undefined;
  product_id?: number | `${number}`;
  setIsDialogOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function AddOrUpdateProduct({
  editMode,
  isAdminOnly,
  product_id,
  setIsDialogOpen,
}: PropTypes) {
  const imageSchema = z
    .instanceof(File, { message: "Please select an image file." })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: `The image is too large. Please choose an image smaller than ${
        MAX_FILE_SIZE / (1024 * 1024)
      }MB.`,
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Please upload a valid image file (JPEG, PNG, or WebP).",
    });
  const formSchema = z.object({
    product_name: z.string(),
    image: editMode ? imageSchema.optional() : imageSchema,
    image_url: z.string(),
    unit_price: z.coerce.number(),
    unit_name: z.string(),
    category: z.coerce.number(),
    description: z.string(),
  });
  const { categories } = useCategory();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: "",
      image: undefined,
      image_url: "",
      category: 0,
      unit_price: 1,
      unit_name: "",
      description: "",
    },
    mode: "all",
  });

  useEffect(() => {
    if (editMode) {
      const ops = async () => {
        const data = await getSpecifcProduct(Number(product_id));
        const editModeDefault = {
          product_name: data?.product_name,
          image_url: data?.image_url,
          category: data?.category.id,
          unit_price: data?.unit_price,
          unit_name: data?.unit_name,
          description: data?.description,
        };
        console.log(editModeDefault);
        form.reset(editModeDefault);
      };
      ops();
    }
  }, [editMode, product_id, form]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const photoFile = new FormData();
    const file = values["image"];
    if (file) {
      photoFile.append("image", file);
      console.log("FROM FILE", file, photoFile);
      let image_url = await uploadPhoto(photoFile);
      if (!image_url)
        image_url = "https://i.ibb.co.com/Nnt2N26/user-placeholder.png";
      // Toaster
      console.log(image_url);
      values["image_url"] = String(image_url);
    }
    console.log(values);
    if (!editMode) {
      try {
        await addProduct(values);
        if (setIsDialogOpen) setIsDialogOpen(false);
        // Toaster
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Added Product Successfully</code>
            </pre>
          ),
        });
      } catch (error) {
        console.log(error);
        // Toaster
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-red-950 p-4">
              <code className="text-white">Failed to Add product</code>
            </pre>
          ),
        });
      }
    } else {
      try {
        console.log(values);
        await updateProduct(values, Number(String(product_id)), isAdminOnly);
        if (setIsDialogOpen) setIsDialogOpen(false);
        // Toaster
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Updated Product Successfully</code>
            </pre>
          ),
        });
      } catch (error) {
        console.log(error);
        // Toaster
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-red-950 p-4">
              <code className="text-white">Failed to Update product</code>
            </pre>
          ),
        });
      }
    }
  }

  return (
    <Form {...form}>
      {JSON.stringify(form.formState.errors)}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="product_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Picture</FormLabel>
              <FormControl>
                <Input
                  type={"file"}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Image URL</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
		*/}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                value={String(Number(field.value))}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Product Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.isArray(categories) &&
                    categories?.map(({ id, category }) => {
                      return (
                        <SelectItem key={id} value={String(Number(id))}>
                          {category}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unit_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Name</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unit_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Price</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Textarea typeof="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        {editMode && (
          <DeleteProductButton
            product_id={Number(String(product_id))}
            isAdminOnly={isAdminOnly}
            setIsDialogOpen={setIsDialogOpen}
          />
        )}
      </form>
    </Form>
  );
}
