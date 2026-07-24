
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}