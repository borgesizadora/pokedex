import { ReactNode } from 'react';

import { Container } from '../Container/styled';
import Header from '../Header';
import * as S from './styled';

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <S.MainContent>
        <Header />
        <Container>{children}</Container>
      </S.MainContent>
    </>
  );
};

export default PageLayout;
