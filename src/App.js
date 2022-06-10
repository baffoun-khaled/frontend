import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AlbumScreen from './screens/AlbumScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/albums' component={AlbumScreen} />
      <Footer />
    </Router>
  )
}

export default App
