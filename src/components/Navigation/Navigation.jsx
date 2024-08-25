import { NavWrapper } from "./styled-components"
import NavDisplay from '@/components/Navigation/NavDisplay/NavDisplay'

const Navigation = ({ onOpenClose, navIsOpen }) => {
    return (
        <NavWrapper className={navIsOpen && 'open'} onClick={onOpenClose}>
            {navIsOpen ? (
                <NavDisplay />
            ) : (
                <>Navigate</>
            )}
        </NavWrapper>
    )
}

export default Navigation