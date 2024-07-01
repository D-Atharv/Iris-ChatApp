import Image from "next/image";
import Link from "next/link";
import Header from "./people/components/Header";
import Left from "./people/components/Left";
import LeftName from "./people/components/LeftName";
import LeftBottom from "./people/components/LeftBottom";
import RightTop from "./people/components/RightTop";


const Home = () => {
  return (
    <>
      <div className="grid grid-flow-row grid-rows-12 bg-cyan-300 min-h-screen gap-x-4 gap-y-0">
        <div className="border-2 border-black bg-orange-950"><Header /></div>

        <div className="grid lg:grid-cols-12 row-span-12 border-2 border-pink-700 lg-gap-x-4">

          <div className="col-span-4 grid grid-rows-12">
            <div className="row-span-1 border-2 border-yellow-400 bg-yellow-400"><Left /></div>
            <div className="row-span-10 border-2 border-yellow-400 bg-slate-900"><LeftName /></div>
            <div className="row-span-1 border-2 border-yellow-400 bg-red-800"><LeftBottom /></div>
          </div>

          <div className="hidden lg-grid grid-rows-11 col-span-8">
            <div className="row-span-1 border-2 border-yello2-400 bg-green-950">
              <RightTop /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

