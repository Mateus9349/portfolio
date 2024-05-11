import React from 'react';

export default function CardCurso({ imagem, titulo, texto }: { imagem: string; titulo: string; texto: string }) {
    return (
        <section className="card-curso">
            <div className="container-img-curso">
                <img className="img-curso" src={imagem} alt={titulo}/>
            </div>
            <div className="container-curso" >
                <h2 className="titulo">{titulo}</h2>
                <p className="texto" >{texto}</p>
            </div>
        </section>
    );
}
