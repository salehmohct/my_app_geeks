import { router } from "./component/Router";
import NavBar from "./component/Navbar";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
function App() {
  const Router = useRoutes(router);
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>{Router}</Suspense>
    </div>
  );
}

export default App;
