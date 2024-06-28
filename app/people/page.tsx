import React from 'react'
import Header from '@/components/Header'
import Search_Bar from '@/components/Search_Bar'
import Middle from '@/components/Middle'
import Bottom from '@/components/Bottom'
const page = () => {
  return (
    <div>
      <Header />
      <Search_Bar />
      <Middle />
      <Bottom />
    </div>
  )
}

export default page
