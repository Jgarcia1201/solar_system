import { solarSystemData } from "@/constants/constants"
import { NavDisplayWrapper, ScrollDiv } from "./styled-components"
import { usePlanetSpotlightContext } from '@/contexts/PlanetSpotlightContext'

const NavDisplay = () => {
    const { setPlanetInSpotlight } = usePlanetSpotlightContext()
    return (
        <NavDisplayWrapper>
            <ScrollDiv>
                {solarSystemData.map((item) => {
                    return (
                        <div key={item.name} onClick={() => setPlanetInSpotlight(item.name)}>{item.name}</div>
                    )
                })}
            </ScrollDiv>

        </NavDisplayWrapper>
    )
}

export default NavDisplay
