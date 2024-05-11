import CardProjeto from "@/components/CardProjeto";
import NavBar from "@/components/NavBar";
import SectionInatu from "@/components/SectionInatu";

import requisitos from "@/mocks/imgs";

export default function Projetos () {
    return(
        <main>
            <NavBar />

            <CardProjeto 
            images={requisitos}
            titulo="Levantamento de requisitos"
            informacoes='Participei ativamente do levantamento de requisitos da plataforma inatú, sendo o pricipal responsável pela atividade, através de entrevistas e analise observacional'
            />

            <SectionInatu />

        </main>
    )
}