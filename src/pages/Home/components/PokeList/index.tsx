import { AnimatePresence, motion } from 'framer-motion';

import Card from '../../../../components/Card';
import { Result } from '../../../../models/Pokemon';
import * as S from './styles';
interface IPokeList {
  pokemonList: Result[];
}

const PokeList: React.FC<IPokeList> = ({ pokemonList }) => {
  return (
    <S.Wrapper>
      <AnimatePresence>
        {pokemonList.map((pokemon, i) => {
          return (
            <motion.div
              key={pokemon.name + i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}>
              <Card pokemon={pokemon.name} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </S.Wrapper>
  );
};

export default PokeList;
