import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { DonutGraph } from "./components/DonutGraph/DonutGraph";
import { HomePage } from "./components/pages/HomePage/HomePage";
import TestPage from "./components/pages/TestPage/TestPage";
import CreatePage from "./components/pages/CreatePage/CreatePage";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route
          path="/private"
          element={
            <PrivateRoute redirectPath="/error">
              <h1>Hello</h1>
            </PrivateRoute>
          }
        />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/error" element={<h1>Error</h1>} />
      </Routes>
    </div>
  );
}

export default App;
