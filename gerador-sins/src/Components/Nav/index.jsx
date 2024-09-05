import styled from "styled-components"

const Menu = styled.nav`
    display: none;
    gap: 20px;
    cursor: pointer;
    background-color: #1e9fc7;
    font-weight: bolder;
    color: var(--cor-texto);

    @media print{
        display: none;
    }
`

export const Nav = () => {
    return(
        <Menu>
            <p>Início</p>
            <p>Certificados</p>
        </Menu>
    )
}