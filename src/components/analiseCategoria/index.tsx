import React from 'react';
import styles from "./analiseCategoria.module.css";



//dados do gráfico
const monthlyData = [
  { month: 'Jan', expense: 850 },
  { month: 'Fev', expense: 1200 },
  { month: 'Mar', expense: 700 },
  { month: 'Abr', expense: 1050 },
  { month: 'Mai', expense: 920 },
  { month: 'Jun', expense: 2000 },
  { month: 'Jul', expense: 600 },
  { month: 'Ago', expense: 1100 },
  { month: 'Set', expense: 980 },
  { month: 'Out', expense: 1450 },
  { month: 'Nov', expense: 750 },
  { month: 'Dez', expense: 1500 }, 
];

const maxExpense = Math.max(...monthlyData.map(data => data.expense));

// categorias
interface Category {
  id: string;
  name: string;
  count: number;
  value: string;
  icon: string; 
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
        {/* Título do Gráfico */}
                    {/* Wrapper das Barras do Gráfico */}
                    <div className={styles.chartBarsWrapper}>
                      {monthlyData.map((data, index) => (
                        <div key={index} className={styles.chartBar}>
                          {/* Altura da barra baseada no valor do gasto, escalonado por uma altura máxima */}
                          <div
                            className={styles.barFill}
                            style={{ height: `${(data.expense / maxExpense) * 100}%` }} // Altura proporcional
                          ></div>
                          <span className={styles.barValue}>R$ {data.expense.toFixed(2).replace('.', ',')}</span>
                          <span className={styles.barMonth}>{data.month}</span>
                        </div>
                      ))}
                    </div>
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