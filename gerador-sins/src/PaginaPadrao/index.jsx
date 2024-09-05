import { Outlet } from "react-router-dom"
import { Cabecalho } from "../Components/Cabecalho"
import { Rodape } from "../Components/Rodape"
import { EstiloGlobal } from "../GlobalStyles"
import { Nav } from "../Components/Nav"

export const PaginaPadrao = () => {
    return(
        <>
            <EstiloGlobal />
            <Cabecalho/>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Rodape />
        </>
    )
}