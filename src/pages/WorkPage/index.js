import React from "react";
import { useParams } from "react-router-dom";
import DidImeetahacker from "../../work/DidImeetahacker";
import ReactCommerce from "../../work/ReactCommerce";

function WorkPage() {
  const { name } = useParams();

  if (name === "react-commerce") {
    return <ReactCommerce />;
  }
  if (name === "didimeetahacker") {
    return <DidImeetahacker />;
  }
  return <h1>Wrong project, please make sure to select the right one</h1>;
}

export default WorkPage;
