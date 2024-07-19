import { useSelector } from "react-redux";
import Homeitems from "../components/homeitems";
const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);
  return (
    <main>
      <div className="items-container">
      {items.map((item) =>
        <Homeitems key={item.id} item={item}></Homeitems>
      )
       }
        
      </div>
    </main>
  );
};
export default Home;
