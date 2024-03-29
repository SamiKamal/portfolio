import React from "react";
import { useParams } from "react-router-dom";
import DidImeetahacker from "../../work/DidImeetahacker";
import ReactCommerce from "../../work/ReactCommerce";
import TodbitWebsite from "../../work/TodbitWebsite";

function WorkPage() {
  const { name } = useParams();

  if (name === "react-commerce") {
    return <ReactCommerce />;
  }
  if (name === "didimeetahacker") {
    return <DidImeetahacker />;
  }
  if (name === "todbitwebsite") {
    return <TodbitWebsite />;
  }

  return <h1>Wrong project, please make sure to select the right one</h1>;
}

export default WorkPage;
