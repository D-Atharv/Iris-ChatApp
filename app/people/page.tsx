// import React from 'react'
// import Header from './components/Header'
// import Left from './components/Left'
// import RightTop from './components/RightTop'
// import LeftName from './components/LeftName'
// import Bottom from './components/LeftBottom'
// import RightBottom from './components/RightBottom'
// import RightMiddle from './components/RightMiddle'

// const App = () => {
//     return (
//         <>
//             <div className='grid min-h-screen  w-screen gap-y-0 bg-c_line_gray '>
//                 {/* <div className='grid grid-rows-12 bg-cyan-300 min-h-screen gap-x-4 w-screen gap-y-0 '> */}
//                 <div className=' w-screen '><Header /></div>

//                 <div className='grid lg:grid-cols-12 row-span-12   '>

//                     <div className=' col-span-4 grid grid-rows-10 xl:border-r-4 border-c_black '>
//                         <div className=' row-span-1  '><Left /></div>
//                         <div className=' row-span-7 '><LeftName /></div>
//                         <div className=' row-span-2 '><Bottom /></div>
//                     </div>

//                     <div className='hidden lg:grid grid-rows-11 col-span-8 '>
//                         {/* <div className='row-span-1 border-2 border-yellow-400 bg-green-950'><RightTop /></div>
//                         <div className='row-span-9 border-2 border-yellow-400 bg-violet-900'><RightMiddle /></div>
//                         <div className='row-span-1 border-2 border-yellow-400 bg-orange-900'><RightBottom /></div> */}

//                         <div className='row-span-1 '><RightTop /></div>
//                         <div className='row-span-9 '><RightMiddle /></div>
//                         <div className='row-span-1 '><RightBottom /></div>
//                     </div>

//                 </div>
//             </div >
//         </>
//     )
// }

// export default App


// import React from 'react'
// import Header from './components/Header'
// import Left from './components/Left'
// import RightTop from './components/RightTop'
// import LeftName from './components/LeftName'
// import Bottom from './components/LeftBottom'
// import RightBottom from './components/RightBottom'
// import RightMiddle from './components/RightMiddle'

// const App = () => {
//     return (
//         <>
//             <div className='grid min-h-screen w-screen gap-y-0 bg-c_line_gray'>
//                 <div className='sticky top-0 w-screen z-10'><Header /></div>

//                 <div className='grid lg:grid-cols-12 row-span-12'>
//                     <div className='col-span-4 grid grid-rows-10 xl:border-r-4 border-c_black'>
//                         <div className='row-span-1'><Left /></div>
//                         <div className='row-span-7'><LeftName /></div>
//                         <div className='sticky bottom-0 row-span-2'><Bottom /></div>
//                     </div>

//                     <div className='hidden lg:grid grid-rows-11 col-span-8'>
//                         <div className='row-span-1'><RightTop /></div>
//                         <div className='row-span-9'><RightMiddle /></div>
//                         <div className='row-span-1'><RightBottom /></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default App



import React from 'react'
import Header from './components/Header'
import Left from './components/Left'
import RightTop from './components/RightTop'
import LeftName from './components/LeftName'
import Bottom from './components/LeftBottom'
import RightBottom from './components/RightBottom'
import RightMiddle from './components/RightMiddle'

const App = () => {
    return (
        <>
            <div className='grid min-h-screen w-screen gap-y-0 bg-c_line_gray'>
                <div className='sticky top-0 w-screen z-10'><Header /></div>

                <div className='grid lg:grid-cols-12 row-span-12'>
                    <div className='col-span-4 grid grid-rows-10 xl:border-r-2  border-c_black'>
                        <div className='sticky top-0 row-span-1'><Left /></div>
                        <div className='row-span-7'><LeftName /></div>
                        <div className='sticky bottom-0 row-span-2'><Bottom /></div>
                    </div>

                    <div className='hidden lg:grid grid-rows-11 col-span-8'>
                        <div className='row-span-1'><RightTop /></div>
                        <div className='row-span-9'><RightMiddle /></div>
                        <div className='row-span-1'><RightBottom /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App


export default App

