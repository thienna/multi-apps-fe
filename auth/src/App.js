import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default (props) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={props.history}>
                    <Switch>
                        <Route path="/auth/signin" component={Signin} />
                        <Route path="/auth/signup" component={Signup} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
