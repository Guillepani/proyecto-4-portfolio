import './style.css'
import { Header } from './components/Header/Header.js'
import { Hero } from './components/Hero/Hero.js'

const app = document.querySelector('#app')

app.innerHTML = `
  ${Header()}
  ${Hero()}
`
