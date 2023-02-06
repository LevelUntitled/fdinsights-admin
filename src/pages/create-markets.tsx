import React ,{useEffect} from 'react'
import CreateMarketForm from '../components/forms/createMarketForm';
import Navbar from "../components/shared/navbar/navBar";

const createMarkets = () => {
    useEffect(() => {
        const getAllMarkets = async () => {
          const data = await fetch("/api/markets/getAll");
          const clients = await data.json();
          console.log(clients);
          // setFetchData(clients);
        };
        getAllMarkets()
      }, []);

  return (
    
  <>
  <Navbar/>
  <div className="mx-[15vw]">
        <h2 className="font-size-22 mb-0 font-bold text-3xl mt-2 ">Create Market</h2>
        <CreateMarketForm/>
      </div>
  </>
  )
}

export default createMarkets;