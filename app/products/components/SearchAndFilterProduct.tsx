"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
import { useEffect, useState } from "react";
import { TProductCategory } from "@/types/product";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  unit_price__gte: z.coerce.string().optional(),
  unit_price__lt: z.coerce.string().optional(),
});

export function SearchAndFilterProduct() {
  const [categories, setCategories] = useState<TProductCategory[]>([]);

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: undefined,
      unit_price__gte: "",
      unit_price__lt: "",
      search: "",
    },
  });
  useEffect(() => {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    fetch(`${S}/category-list/`)
      .then((res) => res.json())
      .then((d: TProductCategory[]) => {
        setCategories(d);
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-red-950 p-4">
              <code className="text-white">
                Failed to fetch product categories
              </code>
            </pre>
          ),
        });
      });
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      // Toaster

      const filteredValues = Object.entries(values)
        /* eslint @typescript-eslint/no-unused-vars : off */
        .reduce((acc, [key, value]) => {
          if (value) acc[key] = value;
          return acc;
        }, {} as Record<string, string | number | boolean | null>);
      const queryStr = new URLSearchParams(
        filteredValues as Record<string, string>
      ).toString();
      console.log(queryStr);
      router.push(`${pathname}${queryStr ? `?${queryStr}` : ""}`);
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
                    {categories?.map(({ id, category }) => {
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
          <Button type="button" onClick={() => form.reset()}>
            Reset
          </Button>
        </form>
      </Form>
    </>
  );
}
