
"use client"
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import BrandAndCategoryCard from '../brandAndCategoryCard/brandAndCategoryCard'
import Loading from '../loding/Loading'

const CategoryData = ({initData}) => {
  const [loading,setLoading] = useState(true)
  const {data} = useQuery({
    queryKey:["category"],
    queryFn:()=>initData,
    initialData:initData,
  })
  useEffect(()=>{
    if(initData){
      setLoading(false)
    }
  },[initData])
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <section className='grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-4  py-7'>
    {data.data.map(category => <BrandAndCategoryCard key={category._id} result={category} check={"categoy"}/>)}


      </section>
    </>
  )
}

export default CategoryData
