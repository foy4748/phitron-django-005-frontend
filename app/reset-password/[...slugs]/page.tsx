import ResetPasswordView from "./components/ResetPasswordView";

type Props = {
  params: Promise<{ slugs: string[] }>;
};

export default async function ResetPasswordPage({ params }: Props) {
  const p = await params;
  const { slugs } = p;
  return (
    <>
      <ResetPasswordView uid64={slugs[0]} token={slugs[1]} />
    </>
  );
}
