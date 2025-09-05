import React, { Suspense } from "react";
import homePro from "@/Apis/homeProducts";
import { data } from "@/types/product.type";
import Filter from "@/app/_components/filter/Filter";
import { categoryData } from "@/types/category.type";
import CategoryApi from "@/Apis/category";
import BrandsApi from "@/Apis/brands";
import { brandData } from "@/types/brands.type";
import AllProducts from "./../../_components/products/Products";
import Loading from "@/app/_components/loding/Loading";
import Mypagination from "@/app/_components/myPagination/Mypagination";

const Products = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const productData: data = await homePro(searchParams);
  const category: categoryData = await CategoryApi();
  const brandsData: brandData = await BrandsApi();

  return (
    <main className="pt-[4.5rem]">
      <section className="w-full md-[85%] px-3 md:px-7 lg:px-10 pt-[2rem]">
        <Filter category={category} brandsData={brandsData} />
        <Suspense fallback={<Loading />}>
          <AllProducts initData={productData} />
          <Mypagination data={productData}/>
        </Suspense>
      </section>
    </main>
  );
};

export default Products;
