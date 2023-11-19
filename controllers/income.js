//const IncomeSchema = require("../models/IncomeModel")
const Income = require('../models/Income')

//const sequelize = require('sequelize')
//const Incomes = require('../models/Income')(sequelize)
const {db, Incomes} = require('../db/db')

exports.addIncome = async(req, res) => {
    const {title, amount, type, category, description, date} = req.body

    const income = await Incomes.create({
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
        res.status(200).json({message: "Income added!"})
    } catch (error) {
        res.status(500).json({message: "Server Error!" + error})
    }

    console.log(req.body);
}

exports.getIncomes = async (req, res) =>{
    try {
        db()
        const incomes = await Incomes.findAll()
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server Error!" + error})
    }
}

exports.insertIncome = async (req, res) =>{
    try {
        const income = await Incomes.create({
            title: 'Iwe',
            amount: 45,
            type: 'Income',
            category: 'Salary',
            description: 'My income',
            date: '2020-10-18',
        })

        console.log("Income's auto-generated ID:", income.id);
        res.status(200).json(Income)
    } catch (error) {
        res.status(500).json({message: "Server Error!" + error})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    await Incomes.destroy({ where: { id: id }})
        .then((income) => { 
            res.status(200).json({message: "Income deleted!"})
        })
        .catch((error) => {
            res.status(500).json({message: "Server Error!" + error})
        })       
}