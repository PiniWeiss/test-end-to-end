import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import DataPage from "./pages/DataPage";
import TestPage from "./pages/TestPage";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="terrorists" element={<DataPage />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
