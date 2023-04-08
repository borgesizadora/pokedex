import { PokeStat } from '~/models/Pokemon';

import { ProgressBar } from '../ProgressBar';
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
          <ProgressBar
            key={stat.stat.name}
            name={stat.stat.name}
            maxValue={stat.base_stat}
            currentValue={stat.base_stat}
          />
        ))}
      </S.AllSkillsContainer>
    </S.Wrapper>
  );
};

export default StatsChart;
