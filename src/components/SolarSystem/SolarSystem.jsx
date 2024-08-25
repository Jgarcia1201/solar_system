'use-client'

import { useEffect, useState } from "react"
import Scene from '@/classes/Scene'
import CelestialBody from '@/classes/CelestialBody'
import * as THREE from 'three'
import { solarSystemData } from '@/constants/constants'
import { SolarSystemCanvas } from "./styled-components"
import { usePlanetSpotlightContext } from "@/contexts/PlanetSpotlightContext"

const SolarSystem = () => {
    const [ scene ] = useState(new Scene())
    const { planetInSpotlight } = usePlanetSpotlightContext()

    useEffect(() => {
        scene.initScene()
        scene.animate()
        const solarSystem = new THREE.Group()
        scene.scene.add(solarSystem)
        const objectsToRender = []
        
        solarSystemData.forEach((item) => {
          const celestialBodySystem = new THREE.Group()
          const position = planetInSpotlight ? 0 : item.position
          const radius = planetInSpotlight ? item.radius * 7 : item.radius
          const celestialBody = new CelestialBody(item.name, radius, position, item.textureFile).getCelestialBody()
          celestialBodySystem.add(celestialBody)
          celestialBodySystem.name = item.name
          solarSystem.add(celestialBodySystem)
          const cb = { system: celestialBodySystem, orbitSpeed: item.orbitSpeed }
          objectsToRender.push(cb)
        })
        const animate = () => {
          const EARTH_YEAR = Math.PI * (1 / 60) * (1 / 60);
          objectsToRender.forEach((obj) => {
            const { system, orbitSpeed } = obj
            system.rotation.y +=  EARTH_YEAR * orbitSpeed * 7
            if (planetInSpotlight) {
              scene.enableCameraControls();
              system.visible = planetInSpotlight === system.name
            } else {
              scene.disableCameraControls();
              system.visible = true
            }
          })
          requestAnimationFrame(animate);
        }
        animate()
      }, [planetInSpotlight, scene])


    return (
          <SolarSystemCanvas id='solar-system-canvas'></SolarSystemCanvas>
    )
}


export default SolarSystem