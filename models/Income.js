const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    const Income = sequelize.define("Income", {
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
        type: {
            type: Sequelize.DataTypes.STRING,
            default: "income",
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
        category: {
            type: Sequelize.DataTypes.STRING,
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

    return Income
}

//module.exports = mongoose.model('Income', IncomeSchema)