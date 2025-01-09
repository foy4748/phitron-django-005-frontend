import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function ProfileHomePage() {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.image_url);
  return (
    <>
      <h1 className="text-3xl font-bold text-center">User Profile</h1>
      <section className="flex flex-col items-center gap-y-8">
        <h1 className="text-2xl font-semibold">
          {session?.user.first_name} {session?.user.last_name}
        </h1>
        <h2 className="text-xl font-extralight">@{session?.user.username}</h2>
        <figure>
          <Image
            className="rounded-full"
            src={String(
              session?.user?.image_url ||
                "https://i.ibb.co.com/Nnt2N26/user-placeholder.png"
            )}
            height={120}
            width={120}
            alt={String(session?.user?.first_name)}
          />
        </figure>
        <p>{String(session?.user?.phone_no || "")}</p>
        <p>{String(session?.user?.email || "")}</p>
      </section>
    </>
  );
}
