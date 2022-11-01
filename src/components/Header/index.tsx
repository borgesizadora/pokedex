import { Link } from 'react-router-dom';

import logo from '~/assets/pokemonLogo.svg';

import { Container } from '../Container/styled';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.LogoWrapper>
          <Link to={'/'}>
            <img src={logo} alt="Pokemón logo" />
          </Link>
        </S.LogoWrapper>
        <nav>
          <S.LinksWrapper>
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/pokedex/1'}>POKEDEX</Link>
            </li>
            <li>
              <Link to={'/'}>POKEMON DATA</Link>
            </li>
            <li>
              <Link to={'/'}>ABOUT</Link>
            </li>
          </S.LinksWrapper>
        </nav>
      </Container>
    </S.Header>
  );
};

export default Header;
