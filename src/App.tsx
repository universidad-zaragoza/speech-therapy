// Import React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Import Routes Constants
import routes from "./routes.json";

// Import Components
import WelcomeView from "./components/Welcome/index";
import MainMenuView from "./components/MainMenu/index";

// Export Context
export const FirebaseContext = React.createContext<any>({});
export const AlexaContext = React.createContext<any>({});

function App() {
  return (
    <>
      <BrowserRouter basename={routes.BASE_ROUTE}>
        <Routes>
          <Route path={routes.START_APP_ROUTE} element={<WelcomeView />} />
          <Route path={routes.MAIN_MENU_ROUTE} element={<MainMenuView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
