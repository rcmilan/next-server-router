export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <p>Inner Layout</p>
        {children}
      </main>
    </>
  );
}
