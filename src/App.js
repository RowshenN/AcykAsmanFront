import React from "react";
import Router from "./routes/Router";
import SebedimContextProvider from "./context/Context";

function App() {
  return (
    <div className="max-w-full relative mx-auto">
      <SebedimContextProvider>
        <Router />
      </SebedimContextProvider>
    </div>
  );
}

export default App;
