import { logDOM } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [state, setState] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setState(json.data.movie);
  };
  console.log(state);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <p>{state.title}</p>
      <img src={state.background_image} alt="detailImg" />
    </div>
  );
}
export default Detail;
