import JobsListingPage from "./pages/JobsListingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetailPage from "./pages/JobDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
       
        <Routes>
        <Route path="/" element={<JobsListingPage />} />
        <Route path="job-details" element={<JobDetailPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
