import { useState } from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 100vw;
    width: 100%;
    height: auto;
    padding: 0px;
    border-radius: 3px;
    background-color: #ffffff;
    color: #021131;
    text-shadow: 0px 0px 4px white;
    transition: 0.5s;
    
    &:hover{
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
    }
    button{
        width: 100px;
        flex-grow: 1;
        cursor: pointer;
    }
    .controles{
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 1px);
        gap: 5px;
    }
    .localData{
        font-size: 1.5rem;
    }
    .linha{
        width: calc(60vw);
        border-bottom: 1px solid black;
    }
    .cargo_resp{
        display: none;
    }
    .nome{
        font-size: 1rem;
    }
    @media print{
        background-image: url('/bg.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        justify-content: space-between;
        width: calc(100vw);
        height: calc(100vh - 10px);
        padding: 5px 0px 5px 0px;
        margin: auto;
        box-shadow: none;
        .cabecalho_certificado{
            width: calc(100%);
            background-color: none;
            display: flex;
            justify-content: center;
            gap: 10px;

        }
        .dados_cabecalho h1{
            font-size: 2.7rem;
        }
        .dados_cabecalho h2{
            font-size: 2.4rem;
        }
        .dados_cabecalho h3{
            font-size: 2.2rem;
        }
        .controles{
            display: none;
        }
        .titulo{
            font-size: 4rem;
        }
        .texto{
            font-size: 1.8rem;
            width: calc(100vw - 150px);
        }
        
    }
`


export const Certificado = ({nome, instituicao, matricula, curso, data_inicio, data_final, carga_horaria, mes, num_mes, ano, cargo_responsavel, graduacao_responsavel, nome_responsavel}) => {

    const [visibilidade, setVisibilidade] = useState('show')

    const alternarVisibilidade = () => {
        visibilidade === "show" ? setVisibilidade("hide") : setVisibilidade("show")
    }


    return(
        <>
            <Card className={`page-breack ${visibilidade}`}>
                <div className="cabecalho_certificado">
                    {/* <img src="brasao.png" alt="" className="oculto img_impressao"/> */}
                    <div className="dados_cabecalho">
                        <h1 className="oculto">PREFEITURA DA CIDADE DO RECIFE</h1>
                        <h2 className="oculto">SECRETARIA DE SEGURANÇA CIDADÃ</h2>
                        <h3 className="oculto">GUARDA CIVIL MUNICIPAL DO RECIFE</h3>
                    </div>
                    {/* <img src="brasao.png" alt="" className="oculto img_impressao"/> */}
                </div>
                <h1 className="titulo oculto">CERTIFICADO</h1>
                
                <h2 className="no-print nome">{nome}</h2>
                <p className="oculto texto">
                    Certificamos que {instituicao}, {nome}, mat.: {matricula}, concluiu {curso}, realizado no 
                    periodo de {data_inicio}/{num_mes}/{ano} a {data_final}/{num_mes}/{ano} com carga horária total de {carga_horaria} horas.
                </p>

                <p className="localData oculto">
                    Recife, {data_final} de {mes} de {ano}
                </p>

                <div className="assinatura_comando oculto">
                    <p className="linha"></p>
                    <p> {cargo_responsavel} </p>
                    <p> {graduacao_responsavel} {nome_responsavel} </p>
                </div>

                {/* <div className="controles"> 
                    <button onClick={()=>{alternarVisibilidade()}}>{visibilidade === "show" ? "marcar" : "desmarcar"}</button>
                </div> */}
            </Card>   
     
        </>
    )
}