import "../i18n";
import { Suspense } from "react";

export default function Providers({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}