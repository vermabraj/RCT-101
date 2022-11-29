import { createRoot } from "react-dom/client";

import App from "./App";
import ThemeContextProvider from "./Contexts/ThemeContextProvider";
import AuthContextProvider from "./Contexts/AuthContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </AuthContextProvider>
);
