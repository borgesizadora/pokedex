import { ReactNode } from 'react';

import * as S from './styled';

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default PageLayout;
