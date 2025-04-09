import SearchShoe from "@/app/components/SearchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";
import React, { useState } from "react";

const SearchPage = async ({ searchParams }) => {
  const { tenGiay } = searchParams;

  const listInitShoe = await getListProductByKeyWord(tenGiay);
  console.log("listInitShoe: ", listInitShoe);

  return <SearchShoe initDataListShoe={listInitShoe} />;
};

export default SearchPage;
