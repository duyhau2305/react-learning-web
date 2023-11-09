import "./App.css";
import "./styles/layout.css";

import { Providers } from "./lib/providers";
import Routers from "./routers";

export default function App() {
  return (
    <Providers>
      <Routers/>
    </Providers>
  );
}
