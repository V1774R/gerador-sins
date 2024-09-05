import styled from "styled-components"

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Inicio = () => {
    return(
        <main>
            <h1>CERTIFICADOS - CAC </h1>

            <img src="brasao.png" alt="Brasão da GCMR" style={{width: "300px"}}/>

            <Formulario action="http://localhost:5005/upload" method="post" encType="multipart/form-data">
                <input type="file" name="campoFile" id="campoFile" />
                <input type="submit" value="Enviar" className="botao"/>
            </Formulario>
        </main>
    )
}