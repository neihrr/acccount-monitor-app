import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 gap-16 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <header className="row-start-1 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Welcome
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Manage your accounts and transactions with ease.
        </p>
      </header>

      {/* Main Section */}
      <main className="row-start-2 flex flex-col gap-8 items-center sm:items-start">
        <Link
          href="/accounts"
          className="px-6 py-3 text-lg font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md shadow-md transition-all"
        >
          Go to Accounts
        </Link>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 text-center text-sm text-gray-600">
        <p>&copy; 2025 Account Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
