import Home from './components/Home'
import About from './components/About'
import App from './App'

export const Routers = [
  {
    path: '/',
    component: <App/>,
    name: "App"
  },
  {
    path: '/home',
    component: <Home/>,
    name: "Home"
  },
  {
    path: '/about',
    component: <About/>,
    name: "About",
  }
]
