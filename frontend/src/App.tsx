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
              <DonutGraph width={100} height={100} />
            </PrivateRoute>
          }
        />
        <Route
          path="/error"
          element={<DonutGraph width={100} height={100} />}
        />
      </Routes>
    </div>
  );
}

export default App;
