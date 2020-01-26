import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'

const App = (props) => {
  debugger;
  return (
    <div className="appWrapper">
      <Header />
      <Gallery pictures={props.store.getState().gallery.pictures} reversePictures={props.dispatch}/>
      <Footer className="appFooter"/>
    </div>
  );
}

export default App;
