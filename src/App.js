import { MsalProvider } from "@azure/msal-react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { store, persistor } from "./app/store";
import PrivateRoutes from "./utils/PrivateRoutes";
import { PersistGate } from "redux-persist/integration/react";

function App({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Dashboard/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MsalProvider>
  );
}

export default App;
