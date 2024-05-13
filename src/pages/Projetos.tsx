import CardProjeto from "@/components/CardProjeto";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionInatu from "@/components/SectionInatu";

import requisitos from "@/mocks/imgs";
import mvs from "@/mocks/mvs";
import '../app/globals.css';

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

            <CardProjeto 
            images={mvs}
            titulo="Plataforma de gestão de dados de impacto"
            informacoes="Conclui com exito uma plataforma que permite ler documentos referentes a prjetos socio ambientais, trabalhar esses dados e gerar tabelas e gréficos de dados socio ambientais."
            /> 

            <Footer />
        </main>
    )
}