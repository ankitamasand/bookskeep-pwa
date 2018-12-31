import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Header from './js/components/header'
import Body from './js/components/body'
import MainCss from './scss/app.scss'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Body />
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
