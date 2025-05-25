import React from 'react';
import styles from "./analiseCategoria.module.css";





// categorias
interface Category {
  id: string;
  name: string;
  count: number;
  value: string;
  icon: string; // Para o emoji do ícone
}

const categoriesData: Category[] = [
  { id: '1', name: 'Alimentação', count: 10, value: 'R$ 1.508,15', icon: '🛒' },
  { id: '2', name: 'Mercado', count: 8, value: 'R$ 508,90', icon: '🛍️' },
  { id: '3', name: 'Transporte', count: 5, value: 'R$ 320,00', icon: '🚗' },
  { id: '4', name: 'Lazer', count: 3, value: 'R$ 250,50', icon: '🎬' },
  { id: '5', name: 'Educação', count: 2, value: 'R$ 600,00', icon: '📚' },
  { id: '6', name: 'Saúde', count: 4, value: 'R$ 180,00', icon: '🏥' },
  { id: '7', name: 'Moradia', count: 1, value: 'R$ 900,00', icon: '🏠' },
];


//toda função de implementação da análise e das categorias
export function AnaliseCategoria(){
  return(
    <div className={styles.container}>

        <div className={styles.titulo}>
        <p>Análise</p>
        <p>Categorias</p>
        </div>    

        <div className={styles.bloco}>
                <div className={styles.analise}>
                    
                    <p> Entrada <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 12 18 L 4 18 C 2.895 18 2 17.105 2 16 L 2 8 C 2 6.895 2.895 6 4 6 L 20 6 C 21.105 6 22 6.895 22 8 L 22 13 M 16 19 L 19 22 L 22 19 M 18 12 L 18.01 12 M 19 16 L 19 22 M 6 12 L 6.01 12" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 10 12 C 10 10.895 10.895 10 12 10 C 13.105 10 14 10.895 14 12 C 14 13.105 13.105 14 12 14 C 10.895 14 10 13.105 10 12 Z" fill="transparent" stroke="rgb(249, 250, 251)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg> </p>
                    <span>R$ 50</span>
                    <p className={styles.subtexto}>Soma de todas as entradas do período</p>
                </div>
        

                <div className={styles.categoria}>
                    <div className={styles.categoriesList}>
                         {categoriesData.map((category) => (
                      <div key={category.id} className={styles.categoryItem}>
                          <span className={styles.categoryIcon}>{category.icon}</span>
                          <span className={styles.categoryName}>{category.name}</span>
                          <span className={styles.categoryCount}>{category.count}</span>
                          <span className={styles.categoryValue}>{category.value}</span>
                      </div>))}
                </div>
        </div>
    </div>
    </div>


  )

}