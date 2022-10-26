import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css"

export function Comment (){
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/87679298?s=400&u=eee5a9ce7f86217c20bc58c8d8ab8afe60f15b00&v=4" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anna Gusmão</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:36">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}