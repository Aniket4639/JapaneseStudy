export default function CourseDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start min-h-screen justify-start font-sans flex-col bg-gray-100">
      <main className="w-full">{children}</main>
    </div>
  );
}
