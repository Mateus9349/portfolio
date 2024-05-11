import styles from './SectionInatu.module.scss';


export default function SectionProjetoInatu() {
    return (
        <section className={styles.principal}>
            <h1>Plataforma Inatú</h1>
            <img className={styles.image} src={'assets/img/inatu/principalInatu.png'} />
            <p>
                O Sistema de Gestão Produtiva da marca coletiva das comunidades da Amazônia.
            </p>

            <div className={styles.horizontal}>
                <ul>
                    <h2>Funcionalidade</h2>
                    <li>Gestão Produtiva</li>
                    <li>Gestão Administrativa</li>
                    <li>Rastreabilidade</li>
                </ul>

                <ul>
                    <h2>Tecnologias Utilizadas</h2>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                </ul>
            </div>

            <div className={styles.card}>
                <h2>Login</h2>
                <img className={styles.image} src={'assets/img/inatu/loginInatu.png'} />
                <p>
                    Sistema de login utilizando serviços do Firebase para autenticação,
                    usando contexto global para gerenciar usuraios "AuthContext".
                </p>
            </div>

            <div className={styles.card}>
                <h2>Controle e Precificação de Processos</h2>
                <img className={styles.image} src={'assets/img/inatu/processosInatu.png'} />
                <p>
                    Cada matéria prima passa por diferentes processos para que seja extraido o óleo.
                    A plataforma conduz o passa a passo registrando todos os gastos, como mão de obra,
                    depreciação de maquinas, energia, insumos utilizados etc.
                </p>
            </div>

            <div className={styles.card}> 
                <h2>CRUD</h2>
                <img className={styles.image} src={'assets/img/inatu/CRUDInatu.png'} />
                <p>
                    Todos as operações principais são realizadas, get, post, put e delete.
                </p>
            </div>

            <div className={styles.card}>
                <h2>Rastreabilidade</h2>
                <img className={styles.image} src={'assets/img/inatu/rastreabilidadeInatu.png'} />
                <p>
                    Todas as informações de coleta e de processo que o óleo sofreu são armazenadas
                    e a cada lote frabricado  é gerado um QRcode que leva a página com as informações
                    de seus respectivos lotes.
                </p>
            </div>
        </section>
    )
}