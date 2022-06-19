import { render } from "react-dom";
import { MainProvider } from "./Context/MainContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { DeleteConfirmProvider } from "./Context/DeleteConfirmContext";
import { SmallTextProvider } from "./Context/SmallTextContext";
import App from "./App";
import "./style.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

render(
  <MainProvider>
    <ThemeProvider>
      <DeleteConfirmProvider>
        <SmallTextProvider>
          <App />
        </SmallTextProvider>
      </DeleteConfirmProvider>
    </ThemeProvider>
  </MainProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
