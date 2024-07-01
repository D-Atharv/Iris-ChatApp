import React from 'react'
import Header from './components/Header'
import LeftP from './components/LeftName'
import RightTop from './components/RightTop'
import LeftName from './components/LeftName'
import Bottom from './components/LeftBottom'
import RightBottom from './components/RightBottom'
import RightMiddle from './components/RightMiddle'

const App = () => {
    return (
        <>
            <div className='grid  grid-flow-row grid-rows-12 bg-cyan-300 min-h-screen gap-x-4 gap-y-0 '>
                <div className='border-2 border-black bg-orange-950'><Header /></div>

                <div className='grid lg:grid-cols-12 row-span-12 border-2 border-pink-700 lg:gap-x-4 '>

                    <div className=' col-span-4 grid grid-rows-12 '>
                        <div className=' row-span-2 border-2 border-yellow-400 bg-yellow-400'><LeftP /></div>
                        <div className=' row-span-8 border-2 border-yellow-400 bg-slate-900'><LeftName /></div>
                        <div className=' row-span-2 border-2 border-yellow-400 bg-red-800'><Bottom /></div>
                    </div>

                    <div className='hidden lg:grid grid-rows-11 col-span-8 '>
                        <div className='row-span-1 border-2 border-yellow-400 bg-green-950'><RightTop /></div>
                        <div className='row-span-9 border-2 border-yellow-400 bg-violet-900'><RightMiddle /></div>
                        <div className='row-span-1 border-2 border-yellow-400 bg-orange-900'><RightBottom /></div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default App
