export default async function getProductDetails(id:string) {
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  
    return res.json();
  }catch(error){
    throw new Error("something went wrong")
  }
}
