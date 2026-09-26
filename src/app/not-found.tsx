import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#09090b]">
      <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
      <p className="text-xl text-zinc-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/30"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Portal
      </Link>
    </div>
  );
}
