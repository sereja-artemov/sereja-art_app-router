export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
