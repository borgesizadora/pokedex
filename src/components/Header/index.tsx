import { NavLink, useLocation } from 'react-router-dom';

import Pokeball from '~/assets/pokeball.svg';
import logo from '~/assets/pokemonLogo.svg';

import { faCircleInfo, faHouse, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { Container } from '../Container/styled';
import * as S from './styles';
const Header = () => {
  const location = useLocation();
  const isPokemonActive = location.pathname.startsWith('/pokemon');
  const isPokedexActive = location.pathname.startsWith('/pokedex');

  return (
    <S.Header>
      <Container>
        <S.LogoWrapper>
          <NavLink to={'/'}>
            <img src={logo} alt="Pokemón logo" width={40} />
            <span>React PokeDex</span>
          </NavLink>
        </S.LogoWrapper>
        <S.HeaderNav>
          <S.LinksWrapper>
            <S.LinkContainer>
              <NavLink end to={'/'}>
                <FontAwesomeIcon icon={faHouse} size={'2x'} />
                Home
              </NavLink>
            </S.LinkContainer>
            <S.LinkContainer>
              <NavLink to={'/pokedex/1'} className={isPokedexActive ? 'active' : 'inactive'}>
                <img src={Pokeball} alt="" width={28} />
                PokeDex
              </NavLink>
            </S.LinkContainer>
            <S.LinkContainer>
              <NavLink to={'/pokemon/1'} className={isPokemonActive ? 'active' : 'inactive'}>
                <FontAwesomeIcon icon={faCircleInfo} size={'2x'} />
                Pokemon Data
              </NavLink>
            </S.LinkContainer>
            <S.LinkContainer>
              <NavLink to={'/battle'}>
                <FontAwesomeIcon icon={faUserNinja} size={'2x'} />
                Battle
              </NavLink>
            </S.LinkContainer>
          </S.LinksWrapper>
        </S.HeaderNav>
        <MobileMenu />
      </Container>
    </S.Header>
  );
};

export default Header;

export const MobileMenu = () => {
  const location = useLocation();
  const isPokemonActive = location.pathname.startsWith('/pokemon');
  const isPokedexActive = location.pathname.startsWith('/pokedex');
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
                  <NavLink end to={'/'}>
                    <FontAwesomeIcon icon={faHouse} size={'2x'} />
                    Home
                  </NavLink>
                </NavigationMenu.Link>
              </S.NavigatioMenuLi>
              <S.NavigatioMenuLi>
                <NavigationMenu.Link asChild>
                  <NavLink to={'/pokedex/1'} className={isPokedexActive ? 'active' : 'inactive'}>
                    <img src={Pokeball} alt="" width={28} />
                    PokeDex
                  </NavLink>
                </NavigationMenu.Link>
              </S.NavigatioMenuLi>
              <S.NavigatioMenuLi>
                <NavigationMenu.Link asChild>
                  <NavLink to={'/pokemon/1'} className={isPokemonActive ? 'active' : 'inactive'}>
                    <FontAwesomeIcon icon={faCircleInfo} size={'2x'} />
                    Pokemon Data
                  </NavLink>
                </NavigationMenu.Link>
              </S.NavigatioMenuLi>
              <S.NavigatioMenuLi>
                <NavigationMenu.Link asChild>
                  <NavLink to={'/battle'}>
                    <FontAwesomeIcon icon={faUserNinja} size={'2x'} />
                    Battle
                  </NavLink>
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
