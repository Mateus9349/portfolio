import Link from "next/link";

import styles from './NavBar.module.scss';
import { useState } from "react";

export default function NavBar() {
    const [styleClick, setStyleClick] = useState(true);

    return(
        <header className={styles.container}>
            <div className={styles.title}>
                <Link href='/' className={styles.link}>Dev FullStack</Link>
            </div>

            <nav className={styleClick ? styles.nav : styles.disable} /* onClick={() => setStyleClick(!styleClick)} */>
                <Link href='/Cursos' className={styles.link}>Cursos</Link>
                {/* <Link href='/Experiencia' className={styles.link}>Experiência</Link> */}
                <Link href='/Projetos' className={styles.link}>Projetos</Link>
            </nav>    
        </header>
    )
}