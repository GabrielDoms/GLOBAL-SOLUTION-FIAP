import { Fragment } from "react";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global-styles";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Toaster position="bottom-right" reverseOrder={false} />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
