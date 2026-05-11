import type { ReactNode } from "react";
import { UtilityFooter } from "@/components/UtilityFooter";
import { UtilityHeader } from "@/components/UtilityHeader";

export function PageChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <UtilityHeader variant="default" />
      {children}
      <UtilityFooter />
    </>
  );
}
