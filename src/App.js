import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GalleryContainer from './components/Gallery/GalleryContainer';
import Modal from './components/Modal/Modal';
import PhotoCardContainer from './components/Modal/PhotoCard/PhotoCardContainer';

class App extends React.Component {
  render (){
    return (
    <div className='appWrapper'>
      <Header />
      <GalleryContainer />
      <Modal>
        <PhotoCardContainer />
      </Modal>
      <Footer className='appFooter'/>
    </div>
    );
  }
};

export default App;
