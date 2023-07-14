import "./styles.css";

import { lazy, Suspense } from "react";

export default function App() {
  let LazyComponent = lazy(() => import("./LazyComponent"));

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
