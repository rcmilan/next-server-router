import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/profile/${params.id}/settings`}>Profile {params.id}</Link>
    </main>
  );
}
