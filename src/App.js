import React, { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header className="header-img light-txt">
        <h1 class="py-2 px-3">A'Darius L. Ellis</h1>
      </header>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
