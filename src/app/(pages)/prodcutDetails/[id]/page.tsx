
import getProductDetails from '@/Apis/getProductDetails'
import ShowProductDetails from '@/app/_components/showProductDetails/ShowProductDetails'
import React from 'react'

const ProductDetails = async ({params}) => {
    const {id} = await params
    const {data} = await getProductDetails(id)
    
  return (
    <div>
      <ShowProductDetails initDate={data} id={id}/>
    </div>
  )
}

export default ProductDetails
