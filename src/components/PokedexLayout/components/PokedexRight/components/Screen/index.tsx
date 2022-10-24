import { Pokemon } from "~/models/Pokemon";
import * as S from "./styles";

const Screen: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <S.Wrapper>
      <S.Screen>
        {pokemon.stats.map((stat) => (
          <S.StatsRow>
            <div key={stat.stat.name}>{stat.stat.name}</div>
            <div key={`${stat.stat.name}-${stat.base_stat}`}>
              {stat.base_stat}
            </div>
          </S.StatsRow>
        ))}
      </S.Screen>
    </S.Wrapper>
  );
};

export default Screen;
