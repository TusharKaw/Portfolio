import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Tushar Kaw';
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-black px-4 py-20 text-center">
      <p className="font-hand text-2xl text-beige sm:text-3xl">Oops, wrong turn.</p>
      <h1 className="mt-2 text-[6rem] leading-none font-black text-ink sm:text-[9rem]">
        4<span className="text-beige">0</span>4
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className="inline-flex items-center gap-2.5 rounded-lg bg-beige px-[30px] py-3 font-semibold text-black">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <Link to="/allprojects" className="inline-flex items-center gap-2.5 rounded-lg border-2 border-beige px-[30px] py-3 font-semibold text-ink transition-colors hover:bg-beige hover:text-black">
          See Projects
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
