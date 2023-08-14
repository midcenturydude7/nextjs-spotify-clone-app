"use client";
import React from "react";
import Input from "./Input";

import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  React.useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <>
      <Input
        placeholder="What do you want to listen to?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
