import React from "react";
import Layout from "@theme-original/Layout";
import StarTipModal from "@site/src/components/StarTipModal";

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <StarTipModal />
    </>
  );
}
