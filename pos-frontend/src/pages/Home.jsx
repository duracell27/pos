import Greetings from "../componets/home/Greetings"
import MiniCard from "../componets/home/MiniCard"
import PopularDishes from "../componets/home/PopularDishes"
import RecentOrders from "../componets/home/RecentOrders"
import BottomNav from "../componets/shared/BottomNav"
import {BsCashCoin} from 'react-icons/bs'
import {GrInProgress} from 'react-icons/gr'


const Home = () => {
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
        {/* left div */}
        <div className="flex-[3]">
          <Greetings/>
          <div className="flex items-center w-full gap-3 px-8 mt-8">
            <MiniCard title="Прибутки" icon={<BsCashCoin/>} number={2506} footerNum={1.6}/>
            <MiniCard title="В процесі" icon={<GrInProgress/>} number={356} footerNum={3.6}/>
          </div>
          <RecentOrders/>
        </div>

        {/* right div */}
        <div className="flex-[2]">
          <PopularDishes/>
        </div>
        <BottomNav/>
    </div>
  )
}

export default Home