import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}
