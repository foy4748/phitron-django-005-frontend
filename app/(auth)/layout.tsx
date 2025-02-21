export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="my-12 md:my-24">{children}</section>
    </>
  );
}
