import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p>Page not found.</p>

      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;