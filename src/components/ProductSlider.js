import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './ProductSlider.module.css';
import egg from '../assets/f006c.gif';

class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
        },
      ],
    };
  }

  render() {

    return (
      <div className={styles.container}>
        <Slider {...this.settings}>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardbox}>
                <h4>Product title</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
