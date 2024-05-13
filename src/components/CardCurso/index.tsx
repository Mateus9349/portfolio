import React from 'react';
import Image from 'next/image'; // Importe o componente Image do Next.js
import styles from './CardCurso.module.scss'

export default function CardCurso({ imagem, titulo, texto }: { imagem: string; titulo: string; texto: string }) {
    return (
        <section className={styles.cardCurso}>
            <div className={styles.containerImgCurso}>
                <Image className={styles.imgCurso} src={imagem} alt={titulo} width={300} height={200} />
            </div>
            <div className={styles.containerCurso} >
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.texto} >{texto}</p>
            </div>
        </section>
    );
}

