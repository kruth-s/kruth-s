export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-6 mt-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Kruthik S. All rights reserved.
      </div>
    </footer>
  );
}
