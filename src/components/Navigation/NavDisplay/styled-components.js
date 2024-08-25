'use client'

import styled from "styled-components"

export const NavDisplayWrapper = styled.div`
    width: 50%;
    max-width: 235px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
`

export const ScrollDiv = styled.div`
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`