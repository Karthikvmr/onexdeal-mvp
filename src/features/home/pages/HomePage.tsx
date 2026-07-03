import Container from "@/components/common/Container";

const HomePage = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Buy. Sell. Discover.
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Find great deals or sell what you no longer need with OneXDeal —
            your modern online marketplace.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            Explore Products
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;