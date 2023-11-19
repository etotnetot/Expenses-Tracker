const IncomeSchema= require("../models/IncomeModel")
const sequelize = require('sequelize')
const db = require('../db/db')

exports.addIncome = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({message: "All fields must be filled!"})
        }

        if (amount <= 0 || amount === 'number') {
            return res.status(400).json({message: "Amount must be positive number!"})
        }

        await income.save()
        res.status(200).json({message: "Income added!"})
    } catch (error) {
        res.status(500).json({message: "Server Error!"})
    }

    console.log(req.body);
}

exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server Error!"})
    }
}