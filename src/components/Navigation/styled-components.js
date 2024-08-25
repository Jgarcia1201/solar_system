'use client'

import styled from "styled-components"

export const NavWrapper = styled.div`
    width: 100%;
    min-height: 15%;
    border-top: 1px solid #F0E5A1;
    background: black;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    font-size: 18px;
    font-weight: 400;
    color: #F7E02F;
    cursor: pointer;
    transition: 0.5s;

    &.open {
        min-height: 25%;
    }

    &:hover {
        color: #FFFF66;
    }
`
