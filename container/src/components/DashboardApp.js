import { mount } from 'dashboad/DashboardApp'
import React, { useRef, useEffect } from 'react'

export default () => {
    const ref = useRef(null) // get references of the element that render on the screen

    useEffect(() => { // make sure run code just one single time when this component is first displayed
        mount(ref.current)
    }, [])

    return <div ref={ref} />
}
