/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log('isLoading', isLoading);
  /*
 
*/
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading ...</h2>}

      <div className='card-grid'>
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
