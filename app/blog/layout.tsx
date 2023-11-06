export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container">{children}</section>;
}
