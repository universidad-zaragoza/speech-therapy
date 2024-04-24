// Import React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Import Routes Constants
import routes from "./routes.json";

// Import Components
import WelcomeView from "./components/Welcome/index";
import MainMenuView from "./components/MainMenu/index";
import DebugView from "./components/Debug/index";
import useAlexaWrapper from "./shared/hooks/useAlexaWrapper";

// Export Context
export const FirebaseContext = React.createContext<any>({});
export const AlexaContext = React.createContext<any>({});

function App() {
  const {
    debugMessages,
    printDebug,
    sendLogToAlexa,
    sendTextToAlexa,
    resetDebugMessages,
  } = useAlexaWrapper();

  return (
    <>
      <AlexaContext.Provider
        value={{
          debugMessages,
          printDebug,
          sendLogToAlexa,
          sendTextToAlexa,
          resetDebugMessages,
        }} // Global functions to all app's components
      >
        <BrowserRouter basename={routes.BASE_ROUTE}>
          <Routes>
            <Route path={routes.START_APP_ROUTE} element={<WelcomeView />} />
            <Route path={routes.MAIN_MENU_ROUTE} element={<MainMenuView />} />
            <Route
              path={routes.DEBUG_ROUTE}
              element={<DebugView msg={debugMessages} />}
            />
          </Routes>
        </BrowserRouter>
      </AlexaContext.Provider>
    </>
  );
}

export default App;
