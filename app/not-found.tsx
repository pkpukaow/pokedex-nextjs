import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <Link href="/" className="flex gap-2">
        Go back to Home <Home size={20} />
      </Link>
    </div>
  );
}
