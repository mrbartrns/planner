import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { DonutGraph } from "./components/DonutGraph/DonutGraph";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectPath="/error">
              <h1>Hello</h1>
            </PrivateRoute>
          }
        />
        <Route path="/error" element={<h1>Error</h1>} />
      </Routes>
    </div>
  );
}

export default App;
