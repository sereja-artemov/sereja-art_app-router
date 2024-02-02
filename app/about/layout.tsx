export const metadata = {
  title:'Сергей Артемов: веб-разработчик, дизайнер, маркетолог',
  description: 'Разрабатываю сайты под ключ и привожу на них клиентов. Верстаю, дизайню, программирую и сопровождаю.',
  keywords: ['Сергей Артемов', 'Sergey Artemov', 'Sergey Artemov frontend developer', 'обо мне'],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
