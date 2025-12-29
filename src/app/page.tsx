import { Header } from './components/layout/Header';

export default function Home() {
  return (
    <main className="h-full">
      <Header />

      {/* یه محتوای تستی برای اینکه صفحه خالی نباشه */}
      <section className="container mx-auto h-[80vh] flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-6">
          Hello <span className="text-primary">World</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Header is ready to fly! 🚀
        </p>
      </section>
    </main>
  );
}
