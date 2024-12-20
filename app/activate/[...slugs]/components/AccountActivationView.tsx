"use client";
import { accountActivation } from "@/actions/auth/accountActivation";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type PropTypes = {
  uid64: string;
  token: string;
};

export default function AccountActivationView({ uid64, token }: PropTypes) {
  const router = useRouter();
  const handleVerify = async () => {
    try {
      const d = await accountActivation(uid64, token);
      console.log(d);
      toast({
        title: "Account Activated, Please Login to continue",
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <p>If you can see this page, that means you are good to go</p>
        <Button
          className="bg-green-500 hover:bg-green-700"
          onClick={handleVerify}
        >
          Click To Verify
        </Button>
      </section>
    </>
  );
}
