"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
// import { Ratings } from "@/components/customUI/GridSystem/Rating";
import { Rating } from "@smastrom/react-rating";
import { useParams } from "next/navigation";
import { addProductReview } from "@/actions/review/addProductReview";
import { useEffect } from "react";
import { getSpecifcReview } from "@/actions/review/getSpecificReview";
import { updateSpecificReview } from "@/actions/review/updateSpecificReview";

const FormSchema = z.object({
  review_text: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  rating: z.number().min(1).max(5),
  product: z.number(),
});

type PropTypes = {
  editMode?: boolean | undefined;
  review_id?: number | `${number}`;
};

export function AddOrUpdateProductReview({ editMode, review_id }: PropTypes) {
  const { id } = useParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      product: Number(id),
      review_text: "",
      rating: 5,
    },
  });

  useEffect(() => {
    if (editMode) {
      const ops = async () => {
        const data = await getSpecifcReview(Number(review_id));
        form.reset(data);
      };
      ops();
    }
  }, [editMode, review_id, form]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    if (editMode) {
      await updateSpecificReview(data, Number(review_id));
    } else {
      await addProductReview(data);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="review_text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {editMode ? "Update Review" : "Add a Review"}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about the product"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="rating"
          control={form.control}
          render={({ field }) => {
            return <Rating {...field} style={{ maxWidth: 200 }} />;
          }}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
