import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <MainRoute />
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
