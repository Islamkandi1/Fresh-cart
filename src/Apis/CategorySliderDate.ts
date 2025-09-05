export default async function CategorySliderDate() {
  try{
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories");
  
    return res.json();
  }catch(error){
    throw new Error("something went wrong")
  }
}
