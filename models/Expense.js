const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    const Expense = sequelize.define("Expense", {
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        amount: {
            type: Sequelize.DataTypes.DECIMAL(20, 4),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    })

    return Expense
}
