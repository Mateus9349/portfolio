import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <footer className={styles.container}>
            <a href="https://www.linkedin.com/in/mateus9349/">
                <Image alt='icon' className={styles.icon} src="assets\icons\linkedin.png"/>
            </a>
            <a href="https://github.com/Mateus9349">
                <Image alt='icon' className={styles.icon} src="assets/icons/github.png"/>
            </a>
            <a href="https://www.instagram.com/mateus_passos1/">
                <Image alt='icon' className={styles.icon} src="assets/icons/instagram.png" />
            </a>
        </footer>
    )
}