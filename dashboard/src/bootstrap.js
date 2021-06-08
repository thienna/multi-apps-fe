import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })

    onNavigate && history.listen(onNavigate)

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    )

    return {
        onParentNavigate({ pathname: nextPath }) {
            if (nextPath !== history.location.pathname) {
                history.push(nextPath)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root')
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
        // https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
        // mount(devRoot, { defaultHistory: createHashHistory() }) // change to hashHistory to debug instead of browserHistory
        // -> https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url -> https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    }
}

export { mount }
