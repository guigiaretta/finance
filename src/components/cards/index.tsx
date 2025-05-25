import React from 'react';
import styles from "./cards.module.css";

export function Cards(){
  return(
    <div className={styles.container}>

            <div className={styles.header}>
                <p>Entrada <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 12 18 L 4 18 C 2.895 18 2 17.105 2 16 L 2 8 C 2 6.895 2.895 6 4 6 L 20 6 C 21.105 6 22 6.895 22 8 L 22 13 M 16 19 L 19 22 L 22 19 M 18 12 L 18.01 12 M 19 16 L 19 22 M 6 12 L 6.01 12" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 10 12 C 10 10.895 10.895 10 12 10 C 13.105 10 14 10.895 14 12 C 14 13.105 13.105 14 12 14 C 10.895 14 10 13.105 10 12 Z" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg> </p>
                 <span>R$ 50</span>
                <p className={styles.subtexto}>Soma de todas as entradas do período</p>
            </div>
       

        <div className={styles.header}>
                <p>Saída <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 12 18 L 4 18 C 2.895 18 2 17.105 2 16 L 2 8 C 2 6.895 2.895 6 4 6 L 20 6 C 21.105 6 22 6.895 22 8 L 22 13 M 18 12 L 18.01 12 M 19 22 L 19 16 M 22 19 L 19 16 L 16 19 M 6 12 L 6.01 12" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 10 12 C 10 10.895 10.895 10 12 10 C 13.105 10 14 10.895 14 12 C 14 13.105 13.105 14 12 14 C 10.895 14 10 13.105 10 12 Z" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg> </p>
                 <span>R$ 50</span>
                <p className={styles.subtexto}>Soma de todas as saídas do período</p>
            </div>


        <div className={styles.header}>
                <p>Balanço <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 12 18 L 4 18 C 2.895 18 2 17.105 2 16 L 2 8 C 2 6.895 2.895 6 4 6 L 20 6 C 21.105 6 22 6.895 22 8 L 22 13 M 16 19 L 19 22 L 22 19 M 18 12 L 18.01 12 M 19 16 L 19 22 M 6 12 L 6.01 12" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 10 12 C 10 10.895 10.895 10 12 10 C 13.105 10 14 10.895 14 12 C 14 13.105 13.105 14 12 14 C 10.895 14 10 13.105 10 12 Z" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg> </p>
                 <span>R$ 50</span>
                <p className={styles.subtexto}>Soma de todas as entradas e saídas do período</p>
            </div>
    </div>

  )

}

