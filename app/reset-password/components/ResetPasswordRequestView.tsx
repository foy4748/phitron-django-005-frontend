"use client";
// const SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
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
import { resetPasswordRequest } from "@/actions/auth/resetPasswordRequest";

const FormSchema = z.object({
  email: z.string().email(),
});

export default function ResetPasswordRequestView() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Toaster
    toast({
      title: "Password Reset Request submitted",
    });
    await resetPasswordRequest(data);
  }

  return (
    <section className="flex justify-center w-full">
      <div className="w-2/3">
        <Form {...form}>
          <h1 className="text-3xl font-bold mb-8">
            Password Reset Request Form
          </h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type={"email"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex">
              <Button className="flex-1" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
