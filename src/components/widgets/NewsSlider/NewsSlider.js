import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './SliderTemplates/SliderTemplates';

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3004/articles?_start=0&_end=3')
      .then(response => {
        this.setState({
          news: response.data
        });
      });
  }

  render() {
    return <SliderTemplates data={this.state.news} type="featured" />;
  }
}

export default NewsSlider;
