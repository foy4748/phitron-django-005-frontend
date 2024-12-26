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
import { resetPassword } from "@/actions/auth/resetPassword";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  new_password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  uid64: z.string(),
  token: z.string(),
});

type PropTypes = {
  uid64: string;
  token: string;
};

export default function ResetPasswordView({ uid64, token }: PropTypes) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      new_password: "",
      uid64,
      token,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Toaster
    toast({
      title: "Password Reset submitted",
    });
    data["uid64"] = uid64;
    data["token"] = token;
    try {
      const d = await resetPassword(data);

      if (d.success) {
        toast({ title: "Password Reset Successful" });
        router.push("/login");
      } else {
        toast({ title: "Password Reset FAILED" });
      }
    } catch (error) {
      console.log(error);
      toast({ title: "Password Reset FAILED" });
    }
  }

  return (
    <section className="flex justify-center w-full">
      <div className="w-2/3">
        <Form {...form}>
          <h1 className="text-3xl font-bold mb-8">Password Reset Form</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
