import './style.css'
import { Header } from './components/Header/Header.js'

const app = document.querySelector('#app')

app.innerHTML = `
  ${Header()}
`
