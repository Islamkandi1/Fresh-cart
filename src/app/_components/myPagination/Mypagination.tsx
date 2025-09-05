"use client";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { data } from "@/types/product.type";
const Mypagination = ({ data }: { data: data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = +(searchParams.get("page") || "1");
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
      <section className="flex justify-center pb-5">
        <Pagination
          count={data.metadata.numberOfPages}
          page={currentPage}
          onChange={(event, value) => updateQuery("page", `${value}`)}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "black", 
            },
            "& .Mui-selected": {
              backgroundColor: "green",
              color: "white", 
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            },
          }}
        />
      </section>
    </>
  );
};

export default Mypagination;
