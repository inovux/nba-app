import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/NewsSlider';
import NewsList from '../../../widgets/NewsList/NewsList';

const NewsMain = () => (
  <div>
    <NewsSlider
      type="featured"
      settings={{dots: false}}
      start={0}
      amount={3}
    />
    <NewsList
      type="cardMain"
      loadMore={true}
      start={3}
      amount={10}
    />
  </div>
)

export default NewsMain;
