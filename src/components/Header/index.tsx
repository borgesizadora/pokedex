import { Link } from 'react-router-dom';

import logo from '~/assets/pokemonLogo.svg';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

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
        <S.HeaderNav>
          <S.LinksWrapper>
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/pokedex/1'}>POKEDEX</Link>
            </li>
            <li>
              <Link to={'/pokemon/1'}>POKEMON DATA</Link>
            </li>
          </S.LinksWrapper>
        </S.HeaderNav>
        <MobileMenu />
      </Container>
    </S.Header>
  );
};

export default Header;

export const MobileMenu = () => {
  return (
    <S.NavigationMenuRoot>
      <S.NavigationMenuList>
        <NavigationMenu.Item>
          <S.NavMenuTrigger>
            <FontAwesomeIcon icon={faBars} size={'xl'} />
          </S.NavMenuTrigger>
          <NavigationMenu.Content>
            <S.NavigationMenuContentUL>
              <S.NavigatioMenuLi>
                <NavigationMenu.Link asChild>
                  <Link to={'/'}>HOME</Link>
                </NavigationMenu.Link>
              </S.NavigatioMenuLi>
              <S.NavigatioMenuLi>
                <NavigationMenu.Link asChild>
                  <Link to={'/pokedex/1'}>POKEDEX</Link>
                </NavigationMenu.Link>
              </S.NavigatioMenuLi>
              <S.NavigatioMenuLi>
                <NavigationMenu.Link asChild>
                  <Link to={'/pokemon/1'}>POKEMON DATA</Link>
                </NavigationMenu.Link>
              </S.NavigatioMenuLi>
            </S.NavigationMenuContentUL>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </S.NavigationMenuList>

      <S.ViewportPosition>
        <S.NavigationMenuViewport />
      </S.ViewportPosition>
    </S.NavigationMenuRoot>
  );
};
