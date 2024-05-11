import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';

interface CardProjetoProps {
    titulo: string;
    images: StaticImageData[];
    informacoes: string;
}

const CardProjeto: React.FC<CardProjetoProps> = (props) => {
    const carrossel = useRef<HTMLDivElement>(null);
    const [whidth, setWhidth] = useState<number>(0);

    useEffect(() => {
        if (carrossel.current) {
            setWhidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
        }
    }, [])

    return (
        <section className="container">
            <h1 className="projeto">{props.titulo}</h1>

            <div className="main">
                <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
                    <motion.div className="inner" drag="x" dragConstraints={{ right: 0, left: -whidth }}>
                        {props.images.map((image, index) => (
                            <motion.div className="item" key={index}>
                                <Image src={image} alt={`Imagem ${index + 1}`} width={300}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <p className="info">{props.informacoes}</p>
        </section>
    );
}

export default CardProjeto;

