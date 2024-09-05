import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

const Area = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Sucesso = () => {
    const { info } = useParams()
    console.log(info)
    return(
        <main>
            <Area className="area">
                {
                    !info ? (
                        <>
                            <h1>Arquivo enviado com scuesso!</h1>
                            <Link to='/certificados'>
                                <button>Gerar Certificados</button>
                            </Link>                                                    
                        </>
                    ):(
                        <>
                            <h1>Nenhum arquivo enviado.</h1>
                            <Link to='/'>
                                <button>Tentar novamente</button>
                            </Link>                        
                        </>                        
                    )
                }
            </Area>
        </main>
    )
}