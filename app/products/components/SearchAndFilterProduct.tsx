"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import { usePathname, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import useCategory from "@/hooks/useCategory";

/* Dialog Related */

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useQueryParams from "@/hooks/useQueryParams";
import { TProductCategory } from "@/types/product";

/* ---  END OF Dialog Related */

const formSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  unit_price__gte: z.coerce.string().optional(),
  unit_price__lt: z.coerce.string().optional(),
});

interface FormValues {
  category: string;
  search: string;
  unit_price__lt: string;
  unit_price__gte: string;
}

type PropTypes = {
  setIsDialogOpen?: Dispatch<SetStateAction<boolean>>;
  categories: TProductCategory[];
};

export function SearchAndFilterProductForm({
  setIsDialogOpen,
  categories,
}: PropTypes) {
  const queryParams = useQueryParams();

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   category: undefined,
    //   unit_price__gte: "",
    //   unit_price__lt: "",
    //   search: "",
    // },
    defaultValues: queryParams,
  });

  useEffect(() => {
    Object.keys(queryParams).forEach((key) => {
      form.setValue(key as keyof FormValues, queryParams[key]);
    });
  }, [form, queryParams]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      // Toaster

      const filteredValues = Object.entries(values)
        /* eslint @typescript-eslint/no-unused-vars : off */
        .reduce(
          (acc, [key, value]) => {
            if (value) acc[key] = value;
            return acc;
          },
          {} as Record<string, string | number | boolean | null>,
        );
      const queryStr = new URLSearchParams(
        filteredValues as Record<string, string>,
      ).toString();
      if (setIsDialogOpen) setIsDialogOpen(false);
      const url = `${pathname}${queryStr ? `?${queryStr}` : ""}`;
      router.push(url);
      // toast({
      //   title: "You submitted the following values:",
      //   description: (
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">Added Product Successfully</code>
      //     </pre>
      //   ),
      // });
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
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={String(Number(field.value)) || undefined}
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
                          <SelectItem
                            className="cursor-pointer hover:bg-primary hover:text-white py-2"
                            key={id}
                            value={String(Number(id))}
                          >
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
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input type="search" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit_price__gte"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit Price (Inclusive Lower Limit)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit_price__lt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit Price (Upper Limit)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            onClick={() => {
              router.push(pathname);
              if (setIsDialogOpen) setIsDialogOpen(false);
            }}
          >
            Reset
          </Button>
        </form>
      </Form>
    </>
  );
}

export function SearchAndFilterProduct() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { categories } = useCategory();

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Search</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search and Filter</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <SearchAndFilterProductForm
            setIsDialogOpen={setOpen}
            categories={categories}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Search</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Search and Filter</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <SearchAndFilterProductForm
          setIsDialogOpen={setOpen}
          categories={categories}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
