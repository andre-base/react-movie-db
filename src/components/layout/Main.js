import React, { useContext } from 'react';
import { IMG_BASE_URL, POSTER_SIZE } from '../../config';
import { ItemThumbnail } from '../ItemThumbnail/ItemThumbnail';
import { MovieContext } from '../../contexts/MovieContext';
import { LoadMore } from '../LoadMore/LoadMore';

export const Main = () => {
  const { items } = useContext(MovieContext);
  return (
    <main>
      <section className="items-grid">
        {items.map((item, index) => (
          <ItemThumbnail
            key={index}
            itemId={item.id}
            title={item.title}
            voteAverage={item.vote_average}
            poster={`${IMG_BASE_URL}/${POSTER_SIZE}${item.poster_path}`}
          />
        ))}
      </section>
      <LoadMore text="Load More" />
    </main>
  );
};
