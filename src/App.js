import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state={
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <LoadingBar
          height={2.5}
          color='#f11946'
          progress={this.state.progress}
          
        />

          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="General"/>}/>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="Business"/>}/>
            <Route exact path='/entertainment' key="entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" country="in" category="entertainment"/>}/>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="Health"/>}/>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="Science"/>}/>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="Sports"/>}/>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="Technology"/>}/>
          </Routes>
        

        
      </Router>
      </div>
    )
  }
}
