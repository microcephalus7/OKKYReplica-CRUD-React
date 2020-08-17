import React from "react";
import CategoryBoardContainer from "../container/Posts/CategoryBoardContainer";
import SideNavContainer from "../container/common/SideNavContainerOnly";

const BoardPage = () => {
  return (
    <>
      <CategoryBoardContainer />
      <SideNavContainer />
    </>
  );
};

export default BoardPage;
