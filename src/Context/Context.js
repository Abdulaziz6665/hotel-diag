import { createContext, useState, useContext } from 'react'
import trendingNoColor from '../img/trending-up-no-color.svg'


const context = createContext()

function Provider ({children}) {

    const [className, setClassName] = useState({target: '', cName: '', img: trendingNoColor})

    return (
        <context.Provider value={{className, setClassName}}>
            {children}
        </context.Provider>
    )
}

function useData () {
    // const {protocol, hostname, port} = window.location
    // const urlToFetch = `${protocol}//${hostname}${port ? ':5000' : ''}`
    
    const { className, setClassName } = useContext(context)

    return [className, setClassName]
}


export {Provider, useData}