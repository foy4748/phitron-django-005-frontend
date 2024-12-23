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
import { changePassword } from "@/actions/auth/changePassword";

const FormSchema = z.object({
  old_password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  new_password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function ChangePasswordView() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Toaster
    toast({
      title: "Password Changes submitted",
    });
    // await loginUser(data);
    // await signIn("credentials", data);
    await changePassword(data);
  }

  return (
    <section className="flex justify-center w-full">
      <div className="w-2/3">
        <Form {...form}>
          <h1 className="text-3xl font-bold mb-8">Password Change Form</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="old_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input type={"password"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type={"password"} {...field} />
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
