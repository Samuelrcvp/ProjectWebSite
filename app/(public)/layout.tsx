import type { ReactNode } from "react";
import PublicHeader from "@/components/ui/PublicHeader";
import PublicFooter from "@/components/ui/PublicFooter";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
}
