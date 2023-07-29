"use client";
import React from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>Modals!</>;
};

export default ModelProvider;
