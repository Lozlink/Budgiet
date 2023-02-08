const initialState = {
  description: '',
  amount: 0,
  transactionType: 'deposit',
  category: ''
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TRANSACTION_DESCRIPTION':
      return {
        ...state,
        description: action.description
      };
    case 'SET_TRANSACTION_AMOUNT':
      return {
        ...state,
        amount: action.amount
      };
    case 'SET_TRANSACTION_TYPE':
      return {
        ...state,
        transactionType: action.transactionType
      };
    case 'SET_TRANSACTION_CATEGORY':
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
}