
export default function Page({ params }: { params: { id: string; category: string } }) {
    
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Dashboard {params.category} - {params.id}
      </main>
    );
  }
  