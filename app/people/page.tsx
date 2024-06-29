// import React from 'react'
// import Header from '@/components/Header'
// import Search_Bar from '@/components/Search_Bar'
// import Middle from '@/components/Middle'
// import Bottom from '@/components/Bottom'
// import Right from '@/components/Right/Right'


// const Page = () => {
//   return (
//     <div>
//       <Header />
//       <Search_Bar />
//       <Right />
//       <Middle />
//       <Bottom />
//     </div>
//   )
// }



// export default Page

import React from 'react';
import Header from '@/components/Header';
import Search_Bar from '@/components/Search_Bar';
import Middle from '@/components/Middle';
import Bottom from '@/components/Bottom';
import Right from '@/components/Right/Right';

// const Page = () => {

//   return (
//     <div className='flex flex-col flex-auto flex-grow'>
//       <Header />
//       <Search_Bar />
//       {/* <Right /> */}
//       <Middle />
//       <Bottom />
//     </div>

//   );
// }

const Page: React.FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Search_Bar />
      <Middle className="flex-1 overflow-y-auto" />
      <Bottom />
    </div>
  );
}



export default Page;
