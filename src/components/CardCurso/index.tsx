import React from 'react';
import Image from 'next/image'; // Importe o componente Image do Next.js

export default function CardCurso({ imagem, titulo, texto }: { imagem: string; titulo: string; texto: string }) {
    return (
        <section className="card-curso">
            <div className="container-img-curso">
                <Image className="img-curso" src={imagem} alt={titulo} width={300} height={200} />
            </div>
            <div className="container-curso" >
                <h2 className="titulo">{titulo}</h2>
                <p className="texto" >{texto}</p>
            </div>
        </section>
    );
}

