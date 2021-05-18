import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultCat from '../images/detCat.gif';

class Gallery extends Component {
  render() {
    const { imgPath, isLoading, useDefaultImg } = this.props;
    return (
      <div className="gallery-container">
        { isLoading && <div>LOADING...</div> }
        { useDefaultImg && <img src={ defaultCat } alt="default cat" /> }
        { !isLoading && !useDefaultImg && <img src={ imgPath } alt="random cat" /> }
      </div>
    );
  }
}

Gallery.propTypes = {
  imgPath: PropTypes.string,
  isLoading: PropTypes.bool,
  useDefaultImg: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  imgPath: state.galleryReducer.imgURL,
  isLoading: state.galleryReducer.isLoading,
  useDefaultImg: state.galleryReducer.defaultImg,
});

export default connect(mapStateToProps)(Gallery);
