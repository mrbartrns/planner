import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectPath="/error">
              <h1>Main Page</h1>
            </PrivateRoute>
          }
        />
        <Route path="/error" element={<h1>Token not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
