'use-client'

import { useEffect } from "react"
import Scene from '@/classes/Scene'
import CelestialBody from '@/classes/CelestialBody'
import * as THREE from 'three'
import { solarSystemData } from '@/constants/constants'
import { SolarSystemCanvas } from "./styled-components"

const SolarSystem = () => {
    useEffect(() => {
        const scene = new Scene()
        scene.initScene()
        scene.animate()
        const solarSystem = new THREE.Group()
        scene.scene.add(solarSystem)
        const objectsToRender = []
        
        solarSystemData.forEach((item) => {
          const celestialBodySystem = new THREE.Group()
          const celestialBody = new CelestialBody(item.radius, item.position, item.textureFile).getCelestialBody()
          celestialBodySystem.add(celestialBody)
          solarSystem.add(celestialBodySystem)
          objectsToRender.push({ system: celestialBodySystem, orbitSpeed: item.orbitSpeed })
        })
    
        const animate = () => {
          const EARTH_YEAR = Math.PI * (1 / 60) * (1 / 60);
          objectsToRender.forEach((obj) => {
            obj.system.rotation.y += EARTH_YEAR * obj.orbitSpeed
          })
          requestAnimationFrame(animate);
        }
        animate()
      }, [])
    return (
          <SolarSystemCanvas id='solar-system-canvas'></SolarSystemCanvas>
    )
}


export default SolarSystem