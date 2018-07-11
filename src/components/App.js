import React, { Component } from 'react'
import '../styles/App.css'


const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Podcast App</h1>
  </header>
)

const Map = (props) => (
  <div className='map'>

    <div className="btn" onClick={props.handleClick}>Get my IP</div>

  </div>
)

const Info = () => (
  <div className='info-bar'>

      info

  </div>
)

class IPAdressApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
     
    

  }

  componentDidMount() {
    const url = 'https://ipinfo.io/geo/'
    const url2 = 'https://api.myip.ms/90.156.201.14'
  

  }


      render () {
    return (
      <div className='App-container'>

       
        <Map
          handleClick={this.handleClick}
        />

         <Info />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <IPAdressApp />

  </div>
)

export default App

