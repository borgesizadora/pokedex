import { PokeStat } from '~/models/Pokemon';

import * as S from './styles';

interface StatsChartProp {
  stats: PokeStat[];
}

const StatsChart: React.FC<StatsChartProp> = ({ stats }) => {
  return (
    <S.Wrapper>
      <h3>Stats</h3>
      <S.AllSkillsContainer>
        {stats.map((stat) => (
          <S.SkillContainer key={stat.stat.name}>
            <S.Text>{stat.stat.name.toUpperCase()}</S.Text>
            <S.SkillBar value={stat.base_stat}>
              <S.SkillValue value={stat.base_stat}>{stat.base_stat}</S.SkillValue>
            </S.SkillBar>
          </S.SkillContainer>
        ))}
      </S.AllSkillsContainer>
    </S.Wrapper>
  );
};

export default StatsChart;
