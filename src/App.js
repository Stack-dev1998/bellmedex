import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Navbar from "./components/navbar";
import DataTable from "./components/dataTable";
import LoadData from "./components/loadData";
import MultiStepWizard from "./components/multiStepWizard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DataTable />} />
        <Route exact path="/load-data" element={<LoadData />} />
        <Route exact path="/multi-step-wizard" element={<MultiStepWizard />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
