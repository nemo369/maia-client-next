import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <Link href="/">
        <a className="text-2xl underline hover:no-underline">Back To Home Page</a>
      </Link>
    </div>
  );
}
