import Navbar from "../components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start min-h-screen justify-start font-sans flex-col bg-gray-100">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
}
