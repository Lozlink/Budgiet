export const setTransactionDescription = description => ({
  type: 'SET_TRANSACTION_DESCRIPTION',
  description
});

export const setTransactionAmount = amount => ({
  type: 'SET_TRANSACTION_AMOUNT',
  amount
});

export const setTransactionType = transactionType => ({
  type: 'SET_TRANSACTION_TYPE',
  transactionType
});

export const setTransactionCategory = category => ({
  type: 'SET_TRANSACTION_CATEGORY',
  category
});