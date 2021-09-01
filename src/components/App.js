import React from 'react';
import './App.css';
import PixabayApi from '../services/Pixabay.api';
import Container from './container/Container';
import Searchbar from './searchbar/Searchbar';
import ImageGallary from './imageGallery/ImageGallery';
import Loader from './loader/Loader';
import Button from './button/Button';
import Modal from './modal/Modal';

class App extends React.Component {
  state = {
    gallery: [],
    largeImage: '',
    q: '',
    page: 1,
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      this.fetchGallery();
    }
  }

  onChangeQuery = query => {
    this.setState({ q: query, page: 1, gallery: [], error: null });
  };

  fetchGallery = () => {
    const { q, page } = this.state;
    const options = { q, page };

    this.setState({ isLoading: true });
    PixabayApi.fetchPixabayImgs(options)
      .then(({ data }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  imgClick = largeImgUrl => {
    this.setState({ largeImage: largeImgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { gallery, largeImage, showModal, error, isLoading } = this.state;
    const shouldShowLoadMoreBtn = gallery.length >= 1 && !isLoading;
    return (
      <Container>
        {error && <h1>Try again!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallary showGallery={gallery} onImgClick={this.imgClick} />

        {isLoading && <Loader />}
        {shouldShowLoadMoreBtn && (
          <Button text={'Load more'} onClick={this.fetchGallery} />
        )}

        {showModal && (
          <Modal onClose={this.imgClick}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}
export default App;
