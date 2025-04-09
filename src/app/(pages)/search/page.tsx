import SearchShoe from "@/app/components/SearchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";
import React, { useState } from "react";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ tenGiay: string }>;
}) => {
  const { tenGiay } = await searchParams;

  const listInitShoe = await getListProductByKeyWord(tenGiay);
  console.log("listInitShoe: ", listInitShoe);

  return <SearchShoe initDataListShoe={listInitShoe} />;
};

export default SearchPage;
