import { createGlobalStyle } from 'styled-components'
export const EstiloGlobal = createGlobalStyle`
    :root{
        --azul-escuro: #0f4979;
        --cor-texto: #ccf1fc;
    }
    *{
        margin: 0;
        font-family: 'Calibri';
    }
    h1, h2, h3, h4, h5, p{
        width: 100%;
        text-align: center;
    }
    button, .botao{
        width: 100%;
        border: none;
        background-color: var(--azul-escuro);
        color: var(--cor-texto);
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover, .botao:hover{
        transition: 0.5s;
        opacity: 0.8;
    }
    main{
        min-height: calc(100vh - 140px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 4px;
        padding: 5px;
        box-sizing: border-box;
        color: var(--azul-escuro);  
        background-color: var(--cor-texto);
    }
    .hide{
        opacity: 0.2;
    }
    .oculto{
        display: none;
    }
    .conteudoProgramatico, .dadosRodape{
        width: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        background-color: none;
        align-items: center;
        gap: 10px;
    }
    .conteudoProgramatico div{
        width: 100%;
    }
    .campo{
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 6px;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);

    }
    .label{
        text-align: left;
        margin-bottom: 0px;
        text-align: center;
    }
    .disciplina{
            text-align: center;
            font-weight: bold;
            font-size: 1.3rem;
    }
    .instrutor{
        font-size: 1rem;
    }


    @media print{
        
        @page{
            size: landscape;
            margin: 10px;
        }
        main{
            padding: 0px;
            background-color: rgba(0, 0, 0, 0);
        }
        .conteudoProgramatico{
            margin-top: -1px;
            width: 100vw;
            height: calc(100vh - 10px);
            background-image: url('/bg.png');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;  
            text-shadow: 0px 0px 4px white;          
        }
        body{
            margin: 0;
            padding: 0;
        }
        .img_impressao{
            width: 150px;
        }
        .no-print{
            display: none;
        }
        .print{
            display: block;
        }
        .page-breack{
            page-break-after: always;
        }
        .oculto{
            display: block;
        }

        *{
            box-sizing: border-box;
        }

    }
`