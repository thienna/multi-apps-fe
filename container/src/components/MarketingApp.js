import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null) // get references of the element that render on the screen
    const history = useHistory()

    useEffect(() => { // make sure run code just one single time when this component is first displayed
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPath }) => {
                const { pathname } = history.location
                if (pathname !== nextPath) { //make sure not get into infinity loop
                    history.push(nextPath)
                }
            },
            initialPath: history.location.pathname,
        })

        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}
