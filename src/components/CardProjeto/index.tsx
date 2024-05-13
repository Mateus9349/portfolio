import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';

import styles from './CardProjeto.module.scss';

interface CardProjetoProps {
    titulo: string;
    images: StaticImageData[];
    informacoes: string;
}

const CardProjeto: React.FC<CardProjetoProps> = (props) => {
    const carrossel = useRef<HTMLDivElement>(null);
    const [width, setWhidth] = useState<number>(0);

    useEffect(() => {
        if (carrossel.current) {
            setWhidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
        }
    }, [])

    return (
        <section className={styles.container}>
            <h1 className={styles.projeto}>{props.titulo}</h1>

            <div className={styles.main}>
                <motion.div ref={carrossel} className={styles.carrossel} whileTap={{ cursor: "grabbing" }}>
                    <motion.div className={styles.inner} drag="x" dragConstraints={{ right: 0, left: -width }}>
                        {props.images.map((image, index) => (
                            <motion.div className={styles.item} key={index}>
                                <Image src={image} alt={`Imagem ${index + 1}`} width={2000}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <p className={styles.info}>{props.informacoes}</p>
        </section>
    );
}

export default CardProjeto;

