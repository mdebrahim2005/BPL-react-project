
import Currency from "../assets/Currency.png";
import Group from "../assets/Group.png";
 const Navber = () => {
    return (
        <div className='container mx-auto mb-6' >
            <div className="navbar bg-base-100 shadow-sm ">
  <div className="flex-1">
   <img src={Group} alt="logo" className="h-14 w-auto" />
  </div>
<div className="mr-10" >
      <ul className="gap-8 flex">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
    </div>
  <div className="flex-none">
    

    <button className="btn btn-soft text-xl text-black font-bold ">0 Coin
      <img src={Currency} alt="Coin Icon" className="w-6 h-6" /> </button>
       

  </div>
</div>
            
        </div>
    );
};


export default Navber;