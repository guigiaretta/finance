// components/TransactionsList.tsx
import React from 'react';
// Importa os estilos como um módulo CSS
import styles from './transacoes.module.css'; 

// Interface para definir a estrutura de uma transação
interface Transaction {
  id: string;
  description: string;
  type: string;
  value: string;
  bank: string;
  date: string;
  installments: string;
}

// Dados de exemplo para as transações
const transactionsData: Transaction[] = [
  {
    id: '1',
    description: 'Supermercado Big Master',
    type: 'Crédito',
    value: 'R$ 896,00',
    bank: 'Nubank',
    date: '21/03/2024',
    installments: '1/1',
  },
  {
    id: '2',
    description: 'Supermercado Big Master',
    type: 'Crédito',
    value: 'R$ 896,00',
    bank: 'Nubank',
    date: '21/03/2024',
    installments: '1/1',
  },

  {
    id: '3',
    description: 'Supermercado Big Master',
    type: 'Crédito',
    value: 'R$ 896,00',
    bank: 'Nubank',
    date: '21/03/2024',
    installments: '1/1',
  },

  {
    id: '4',
    description: 'Supermercado Big Master',
    type: 'Crédito',
    value: 'R$ 896,00',
    bank: 'Nubank',
    date: '21/03/2024',
    installments: '1/1',
  },





];

// Componente principal para a lista de transações
export function TransactionsList() {
  return (
    // Usa as classes do módulo CSS
    <div className={styles.transactionsContainer}>


        <div className={styles.transactionsTitle}>
            <h2 >Transações</h2>
        </div> 

      {/* Cabeçalho da tabela de transações */}
      <div className={styles.transactionsHeader}>
        <span className={`${styles.headerItem} ${styles.description}`}>Descrição</span>
        <span className={`${styles.headerItem} ${styles.type}`}>Tipo</span>
        <span className={`${styles.headerItem} ${styles.value}`}>Valor</span>
        <span className={`${styles.headerItem} ${styles.bank}`}>Banco</span>
        <span className={`${styles.headerItem} ${styles.date}`}>Data</span>
        <span className={`${styles.headerItem} ${styles.installments}`}>Parcelas</span>
      </div>

      {/* Lista de transações */}
      <div className={styles.transactionsList}>
        {transactionsData.map((transaction) => (
          <div key={transaction.id} className={styles.transactionItem}>
            {/* Ícone de carrinho de compras (placeholder sem biblioteca externa) */}
            <span className={styles.transactionIcon}>🛒</span> 
            <span className={`${styles.itemData} ${styles.description}`}>{transaction.description}</span>
            <span className={`${styles.itemData} ${styles.type}`}>{transaction.type}</span>
            <span className={`${styles.itemData} ${styles.value}`}>{transaction.value}</span>
            <span className={`${styles.itemData} ${styles.bank}`}>{transaction.bank}</span>
            <span className={`${styles.itemData} ${styles.date}`}>{transaction.date}</span>
            <span className={`${styles.itemData} ${styles.installments}`}>{transaction.installments}</span>
          </div>
        ))}
      </div>
    </div>
  );
}