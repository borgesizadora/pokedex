import { Link, useParams } from 'react-router-dom';

import Evolution from '~/components/Evolution';

const Pokemon = () => {
  const params = useParams();

  return (
    <div>
      {params.id ? (
        <>
          <Link to={`/pokemon/${Number(params.id) > 1 ? Number(params.id) - 1 : 1}`}>
            PREV POKEMON
          </Link>
          <Link to={`/pokemon/${Number(params.id) + 1}`}>NEXT POKEMON</Link>
          <Evolution id={Number(params.id)} />
        </>
      ) : null}
    </div>
  );
};

export default Pokemon;
