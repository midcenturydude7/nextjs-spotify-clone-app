"use client";
import React from "react";

import Modal from "@/components/Modal";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}>
        Test Children
      </Modal>
    </>
  );
};

export default ModelProvider;
