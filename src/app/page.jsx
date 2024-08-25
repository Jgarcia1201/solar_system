'use client'

import SolarSystem from '@/components/SolarSystem/SolarSystem'
import { MenuWrapper, SolarSystemWrapper } from './styled-components'
import Navigation from '@/components/Navigation/Navigation'
import { useState } from 'react'
import { PlanetSpotlightProvider } from '@/contexts/PlanetSpotlightContext'

export default function Home() {
  const [ navIsOpen, setNavIsOpen ] = useState(true)
  const [ focusedPlanet, setFocusedPlanet ] = useState(null)


  return (
    <PlanetSpotlightProvider>
      <div id='main-wrapper' style={styles}>
          <SolarSystemWrapper id='solar-system-wrapper'>
            <SolarSystem />
          </SolarSystemWrapper>
          <Navigation
            onOpenClose={() => setNavIsOpen(!navIsOpen)}
            navIsOpen={navIsOpen}
            focusedPlanet={focusedPlanet}
          />

      </div>
    </PlanetSpotlightProvider>
  )
}

const styles = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center'
}

