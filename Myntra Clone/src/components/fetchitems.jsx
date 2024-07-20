import { useSelector } from "react-redux";

const Fetchitems=()=>{
const FetchStatus=useSelector(store => store.fetchStatus);
console.log(FetchStatus);
return(
    <>
        <div>
            FetchDone:{ FetchStatus.fetchDone}
            Currently Fetching:{FetchStatus.currentlyFetching}
        </div>
    </>
);
}
export default Fetchitems;