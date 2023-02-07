import {connect} from 'react-redux'
import TransactionInput from '../TransactionInput';
import { setTransactionDescription, setTransactionAmount, setTransactionCategory, setTransactionType } from './transactions';

const mapStateToProps = state => ({
  description: state.transaction.description,
  amount: state.transaction.amount,
  transactionType: state.transaction.transactionType,
  category: state.transaction.category
});

const mapDispatchToProps = {
  setTransactionDescription,
  setTransactionAmount,
  setTransactionType,
  setTransactionCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInput)