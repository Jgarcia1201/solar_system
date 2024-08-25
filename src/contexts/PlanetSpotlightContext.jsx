import { useContext } from 'react'
import { createContext, useState } from 'react'

const PlanetSpotlightContext = createContext(null)

export const PlanetSpotlightProvider = ({children }) => {
    const [ planetInSpotlight, setPlanetInSpotlight ] = useState(null)

    console.log(planetInSpotlight)

    return (
        <PlanetSpotlightContext.Provider value={{ planetInSpotlight, setPlanetInSpotlight }}>
            {children}
        </PlanetSpotlightContext.Provider>
    )
}

export const usePlanetSpotlightContext = () => {
    return useContext(PlanetSpotlightContext)
}