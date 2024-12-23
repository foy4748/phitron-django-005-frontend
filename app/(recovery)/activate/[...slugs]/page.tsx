import AccountActivationView from "./components/AccountActivationView";

type Props = {
  params: Promise<{ slugs: string[] }>;
};

export default async function AccountActivationPage({ params }: Props) {
  const p = await params;
  const { slugs } = p;
  return (
    <>
      <AccountActivationView uid64={slugs[0]} token={slugs[1]} />
    </>
  );
}
