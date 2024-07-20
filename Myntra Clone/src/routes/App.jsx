import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const fetch=useSelector(store=>store.fetchStatus);
  return (
    <>
      <Header></Header>
      <Fetchitems></Fetchitems>
     {fetch.currentlyFetching?<LoadingSpinner></LoadingSpinner>: <Outlet></Outlet>} 
      <Footer></Footer>
    </>
  );
}

export default App;
// be default react searches for image in public folder
