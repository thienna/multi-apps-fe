import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// import Landing from './components/Landing'
// import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default (props) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={props.history}>
                    <Switch>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
