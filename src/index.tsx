import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ChakraBaseProvider } from "@chakra-ui/react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </StrictMode>
);
