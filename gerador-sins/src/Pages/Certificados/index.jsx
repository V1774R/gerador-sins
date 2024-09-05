import { Certificado } from "../../Components/Certificado"
import {v4 as uuidv4} from 'uuid'
import utils from "../../JavaScript/utils"
import { useEffect, useState } from "react"


export const Certificados =  () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        (async function() {
            const res = await utils.buscarDados();
            lista.length == 0 ? setLista(res) : ""
            //console.log(lista)
        })()
    },[])
    
    const [isOk, setIsOk] = useState(false)
    const [coordenacao, setCoordenacao] = useState('')
    const [cargoResponsavel, setCargoResponsavel] = useState('GERENTE GERAL DA GCMR')
    const [responsavel, setResponsavel] = useState('COMANDANTE CLÁUDIO LUIZ GOMES DO NASCIMENTO')

    const [grade, setGrade] = useState([
        {
            disciplina: "RELACIONAMENTO INTERPESSOAL",
            cargaHoraria: "4 HORAS",
            instrutor: ""
        },
        {
            disciplina: "DIREITOS HUMANOS",
            cargaHoraria: "4 HORAS",
            instrutor: ""
        },
        {
            disciplina: "LEGISLAÇÃO APLICADA",
            cargaHoraria: "4 HORAS",
            instrutor: ""
    
        },
        {
            disciplina: "CONCEPÇÃO DE GUARDA COMUNITÁRIA",
            cargaHoraria: "2 HORAS",
            instrutor: ""
        },
        {
            disciplina: "PREVENÇÃO E COMBATE A INCÊNDIO",
            cargaHoraria: "2 HORAS",
            instrutor: ""
        },
        {
            disciplina: "NOÇÕES DE APH",
            cargaHoraria: "4 HORAS",
            instrutor: ""
        },        
        {
            disciplina: "TÉCNICAS DE ALGEMAÇÃO",
            cargaHoraria: "4 HORAS",
            instrutor: ""
    
        },        
        {
            disciplina: "TÉCNICAS E PROCEDIMENTOS OPERACIONAIS",
            cargaHoraria: "8 HORAS",
            instrutor: ""
            
        },        
        {
            disciplina: "TÉCNICAS E PROCEDIMENTOS OPERACIONAIS (USO DIFERENCIADO DA FORÇA)",
            cargaHoraria: "4 HORAS",
            instrutor: ""
            
        },        
        {
            disciplina: "TÉCNICAS E PROCEDIMENTOS OPERACIONAIS (GERENCIAMENTO DE CRISES E MEDIAÇÃO DE CONFLITOS)",
            cargaHoraria: "4 HORAS",
            instrutor: ""
            
        }

    ])

    const validar = () => {
        const vazio = [];
        grade.forEach(dado => {
            //console.log(dado)
            if(!dado.instrutor){
                vazio.push(dado)
                //console.log(dado.disciplina + " está vazio.")
            }            
        })

        if(!coordenacao || !cargoResponsavel || !responsavel){
            vazio.push("erro ao preencher dados do rodape")
        }

        if(vazio.length == 0){
            setIsOk(true)
            return true
        }else{
            alert('Erro de preenchimento! Verifique todos os campos e tente novamente.')
            return false
        }
        
    }

    const handleChange = (e) => {
        const {name, value } = e.target
        //  >> name << recebe o indice do campo que está acessando apos o onBlur
        const gradeCopia = [...grade]
        const gradeAtualizada = [...grade, gradeCopia[name].instrutor = value]
        console.log(gradeAtualizada)

        
    }

    return(

        <main>
            <h3 className="no-print">CERTIFICADOS</h3>
            {
                lista.map(dado => <Certificado 
                    key={uuidv4()}
                    instituicao={dado.instituicao} 
                    nome={dado.nome}
                    matricula={dado.matricula}
                    curso={dado.curso}
                    data_inicio={dado.data_inicio}
                    data_final={dado.data_final}
                    mes={dado.mes}
                    num_mes={dado.num_mes < 10 ? `0${dado.num_mes}` : dado.num_mes}
                    ano={dado.ano}
                    carga_horaria={dado.carga_horaria}
                    local={dado.local}
                    cargo_responsavel={cargoResponsavel ? cargoResponsavel : ""}
                    graduacao_responsavel={""}
                    nome_responsavel={responsavel ? responsavel : ""}
                />)
            } 
            
            <div className="conteudoProgramatico">
                <h1 style={{marginTop: "25px"}}>CONTEÚDO PROGRAMÁTICO</h1>
                {
                    !isOk ? (
                        grade.map((item, index) => (
                            <div key={uuidv4()}>
                                <p className="label no-print">{item.disciplina} COM {item.cargaHoraria} DE DURAÇÃO.</p>
                                <input 
                                    type="text" 
                                    className="campo no-print" 
                                    name={index}
                                    onBlur={handleChange}
                                    defaultValue={grade[index].instrutor}
                                />
                            </div>
                        ))
                    ):("")
                }
                <>
                    {
                        isOk ? (
                            grade.map(item => (
                                <div key={uuidv4()}>
                                    <p className="label disciplina">{item.disciplina} COM {item.cargaHoraria} DE DURAÇÃO.</p>
                                    <p className="instrutor"> {item.instrutor.toUpperCase()} </p>
                                </div>
                            )
                        )
                        ):("")
                    }         
                    {
                        isOk ? (
                            <>
                                <div key={uuidv4()}>
                                    <p className="label disciplina">COORDENAÇÃO</p>
                                    <p className="instrutor">{coordenacao}</p>
                                    <p className="label disciplina">RESPONSÁVEL</p>
                                    <p className="instrutor">{responsavel}</p>
                                </div>
                            </>
                        ):("")
                    }   
                </>
            </div>  

            <div className="dadosRodape no-print">
                
                {
                    !isOk ? (
                        <div key={uuidv4()} className="dadosRodape">
                            <input className="campo" type="text" placeholder="Coordenador(a) do curso"  onBlur={(e)=>{setCoordenacao(e.target.value)}} defaultValue={coordenacao}/>
                            <input className="campo" type="text" placeholder="Cargo do Responsável. Ex.: COMANDANTE" onBlur={(e)=>{setCargoResponsavel(e.target.value)}} defaultValue={cargoResponsavel}/>
                            <input className="campo" type="text" placeholder="Nome do Responsável" onBlur={(e)=>{setResponsavel(e.target.value)}} defaultValue={responsavel}/>
                        </div>
                    ):("")
                }
            </div>        
            {
                isOk ? (
                    <>
                        <button style={{backgroundColor: "#666666"}} className="no-print" onClick={()=>{setIsOk(false)}}>EDITAR INFORMAÇÕES</button>
                        <button className="no-print" onClick={()=>{window.print()}}>GERAR CERTIFICADOS</button>
                    </>
                ):(
                    <button className="no-print" onClick={()=>{validar()}}>Concluir preenchimento</button>
                )
            }
        </main>
    )
}
