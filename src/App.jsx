import "./App.css";
import Sidebar from "./pages/Sidebar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="h-full w-full lg:flex justify-content-start ">
          <Sidebar />
          <Main />
        </div> 
      </div>
    </>
  );
}

export default App;
