import styles from "./Avatar.module.css"

/*Método de desestruturação*/
export function Avatar({ hasBorder = true, src }){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}

/*export function Avatar(props){
    const hasBorder = props.hasBorder != false;

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={props.src} 
        />
    );
}*/