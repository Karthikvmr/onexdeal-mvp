const HomePage = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-5xl font-bold text-slate-900">
        Buy. Sell. Discover.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        OneXDeal is a modern marketplace where you can discover amazing deals,
        sell products, and connect with buyers effortlessly.
      </p>

      <button className="mt-10 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
        Explore Products
      </button>
    </section>
  );
};

export default HomePage;