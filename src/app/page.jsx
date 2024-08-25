'use client'

import Scene from '@/classes/Scene'
import CelestialBody from '@/classes/CelestialBody'
import * as THREE from 'three'
import { solarSystemData } from '@/constants/constants'
import SolarSystem from '@/components/SolarSystem/SolarSystem'

export default function Home() {
  return (
    <div id='main-wrapper' style={styles}>
        <SolarSystem />
    </div>
  )
}

const styles = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center'
}

