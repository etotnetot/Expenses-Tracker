const Expense = require('../models/Expense')
const {db, Expenses} = require('../db/db')

exports.addExpense = async(req, res) => {
    const {title, amount, type, category, description, date} = req.body

    const income = await Expenses.create({
        title: title,
        amount: amount,
        type: type,
        category: category,
        description: description,
        date: date,
    })

    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({message: "All fields must be filled!"})
        }

        if (amount <= 0 || amount === 'number') {
            return res.status(400).json({message: "Amount must be positive number!"})
        }

        await income.save()
        res.status(200).json({message: "Expense added!"})
    } catch (error) {
        res.status(500).json({message: "Server Error!" + error})
    }

    console.log(req.body);
}

exports.getExpense = async (req, res) =>{
    try {
        db()
        const expenses = await Expenses.findAll()
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: "Server Error!" + error})
    }
}

exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    await Expenses.destroy({ where: { id: id }})
        .then((expense) => { 
            res.status(200).json({message: "Expense deleted!"})
        })
        .catch((error) => {
            res.status(500).json({message: "Server Error!" + error})
        })       
}