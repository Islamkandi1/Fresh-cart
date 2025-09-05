"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { categoryData } from "@/types/category.type";
import { brandData } from "@/types/brands.type";
import { useRouter, useSearchParams } from "next/navigation";
const Filter = ({
  category,
  brandsData,
}: {
  category: categoryData;
  brandsData: brandData;
}) => {
  // left the search to url======================================================
  const router = useRouter();
  const searchParams = useSearchParams();
  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/products?${params.toString()}`);
  };
  return (
    <>
      <section className="flex items-center flex-wrap justify-center gap-7 ">
        <DropdownMenu>
          <DropdownMenuTrigger className=" capitalize p-4 py-2 rounded-[10px] border-1 border-main flex items-center gap-4 cursor-pointer text-main">
            sort <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-2 py-1">
            <DropdownMenuItem
              onClick={() => updateQuery("sort", "price")}
              className="text-main hover:!text-main cursor-pointer capitalize text-[1rem]"
            >
              small to big
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateQuery("sort", "-price")}
              className="text-main hover:!text-main cursor-pointer capitalize text-[1rem]"
            >
              big to small
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className=" capitalize p-4 py-2 rounded-[10px] border-1 border-main flex items-center gap-4 cursor-pointer text-main">
            Categories <IoIosArrowDown />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="   px-2 py-1">
            <DropdownMenuItem
              onClick={() => updateQuery("category", "")}
              className="text-main hover:!text-main cursor-pointer capitalize text-[1rem]"
            >
              All
            </DropdownMenuItem>
            {category.data.map((category) => (
              <DropdownMenuItem
                onClick={() => updateQuery("category", category._id)}
                key={category._id}
                className="text-main hover:!text-main cursor-pointer capitalize text-[1rem]"
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className=" capitalize p-4 py-2 rounded-[10px] border-1 border-main flex items-center gap-4 cursor-pointer text-main">
            Brands <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="   px-2 py-1">
            <DropdownMenuItem
              onClick={() => updateQuery("brand", "")}
              className="text-main hover:!text-main cursor-pointer capitalize text-[1rem]"
            >
              All
            </DropdownMenuItem>
            {brandsData.data.slice(0, 15).map((brand) => (
              <DropdownMenuItem
                onClick={() => updateQuery("brand", brand._id)}
                key={brand._id}
                className="text-main hover:!text-main cursor-pointer capitalize text-[1rem]"
              >
                {brand.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </section>
    </>
  );
};

export default Filter;
