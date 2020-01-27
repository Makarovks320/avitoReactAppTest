import React from 'react'
// import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GalleryContainer from './components/Gallery/GalleryContainer'
import Modal from './components/Modal/Modal'

class App extends React.Component {
  render (){
    return (
    <div className="appWrapper">
      <Header />
      <GalleryContainer />
      <Modal />
      <Footer className="appFooter"/>
    </div>
  );
}
}
// let mapStateToProps = (state) => ({modal: state.gallery.modal})

// export default connect( mapStateToProps, )(App);
export default App;
