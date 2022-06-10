import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import UserDetailsScreen from './screens/UserDetailsScreen'
import AlbumScreen from './screens/AlbumScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/albums' component={AlbumScreen} />
      <Route exact path='/user/:id' component={UserDetailsScreen} />

      <Footer />
    </Router>
  )
}

export default App
