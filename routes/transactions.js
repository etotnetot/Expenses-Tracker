const router = require('express').Router();
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')

router.get('/', (req, res) => {
    res.send('Hellloooy!')
})

router.get('/get-incomes', getIncomes)
    .post('/add-income', addIncome)
    .delete('/delete-income/:id', deleteIncome)
    .get('/get-expenses', getExpense)
    .post('/add-expense', addExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router;