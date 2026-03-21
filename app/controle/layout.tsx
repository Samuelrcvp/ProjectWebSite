import type { ReactNode } from "react";
import Sidebar from "@/components/ui/Sidebar";
import ToastProvider from "@/components/ui/ToastProvider";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f8f5fb]">
      <Sidebar />
      <main className="flex-1 md:p-8 p-4 pt-16 md:pt-8 overflow-auto">
        <ToastProvider />
        {children}
      </main>
    </div>
  );
}
