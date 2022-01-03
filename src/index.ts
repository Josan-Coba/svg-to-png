import { createElement } from 'react'
import { render } from 'react-dom'
import Main from './Main'

const rootElement = createElement(Main)
const appContainer = document.getElementById('app-root')

render(rootElement, appContainer)
