import styled from "styled-components"

const HeaderEstilizado = styled.header`
    width: 100%;
    height: 80px;
    background-color: var(--azul-escuro);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--cor-texto);
`
export const Cabecalho = () => {
    return(
        <HeaderEstilizado className="no-print">
            <h1>SINS</h1>
        </HeaderEstilizado>
    )
}