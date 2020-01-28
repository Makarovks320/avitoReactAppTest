import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GalleryContainer from './components/Gallery/GalleryContainer';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  render (){
    return (
    <div className='appWrapper'>
      <Header />
      <GalleryContainer />
      <Modal />
      <Footer className='appFooter'/>
    </div>
    );
  }
};

export default App;
