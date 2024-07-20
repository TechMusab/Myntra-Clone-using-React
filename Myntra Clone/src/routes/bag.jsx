import Bagsummary from "../components/bagsummary";
import Bagitem from "../components/bagitem";
import { useSelector } from "react-redux";
const Bag = () => {
  const items=useSelector((store)=>store.Bagitems);
  const fullitems = useSelector((store) => store.items);
  const newarray=[];
  fullitems.forEach((fullitem) => {
    items.forEach((item) => {
      if (fullitem.id===item) {
        newarray.push(fullitem);
      }
    });
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
          {newarray.map((item)=><Bagitem key={item.id} item={item}></Bagitem>)}
          </div>
          <Bagsummary items={newarray}></Bagsummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
