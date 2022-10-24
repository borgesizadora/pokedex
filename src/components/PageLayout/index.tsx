import React from "react";
import * as S from "./styled";

const PageLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default PageLayout;
