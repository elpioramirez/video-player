import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ChakraBaseProvider } from "@chakra-ui/react";

import './index.scss';

import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </StrictMode>
);
