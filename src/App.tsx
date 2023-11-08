import "./App.css";

import { Providers } from "./lib/providers";
import Routers from "./routers";

export default function App() {
  return (
    <Providers>
      <Routers/>
    </Providers>
  );
}
