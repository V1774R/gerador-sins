import { styled } from 'styled-components'

const FooterEstilizado = styled.footer`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--azul-escuro);
    color: var(--cor-texto);
`

export const Rodape = () => {
    return(
        <FooterEstilizado className="no-print">
            <p>&copy; Todos os diretitos reservados</p>
            <p>Desenvolvido por Victor Almeida</p>
        </FooterEstilizado>
    )
}