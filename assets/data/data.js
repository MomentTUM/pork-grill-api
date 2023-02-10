const {Category, sequelize } = require('../../src/models')

let categoryData = [
    { name: 'Beef(วัว)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/beef_mjlv7k.jpg', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-10 09:51:00'},
    { name: 'Pork(pork)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/pork_nev9dj.jpg', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-10 09:51:00'},
    { name: 'Appetizer(ทานเล่น)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/appetizer_cv6ip7.jpg', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-10 09:51:00'},
    { name: 'vegetable(ผัก)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022140/vegetable_wzvwke.jpg', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-10 09:51:00'},
    { name: 'Dessert(ของหวาน)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022140/desserts_op64rg.jpg', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-10 09:51:00'},
    { name: 'Beverage(เครื่องดื่ม)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022140/beverage_jgxkho.jpg', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-10 09:51:00'},
]

const seedData = async () => {
    try {
        await sequelize.sync({force: true})
        let category_res = await Category.bulkCreate(categoryData)
    } catch(err) {
        console.log(err)
    }
}

seedData()

//-----------------------------------------------------------------------------------------------------------------//

// const {Category, sequelize } = require('../models')

// let categoryData = [
//     { name: 'Beef(วัว)', image: '', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-07 05:53:58'},
//     { name: 'Pork(pork)', image: '', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-07 05:53:58'},
//     { name: 'Appetizer(ทานเล่น)', image: '', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-07 05:53:58'},
//     { name: 'vegetable(ผัก)', image: '', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-07 05:53:58'},
//     { name: 'Dessert(ของหวาน)', image: '', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-07 05:53:58'},
//     { name: 'Beverage(เครื่องดื่ม)', image: '', createdAt: '2023-02-07 05:53:58',updatedAt:'2023-02-07 05:53:58'},
// ]

// const seedData = async () => {
//     try {
//         await sequelize.sync({force: true})
//         let category_res = await Category.bulkCreate(categoryData)
//     } catch(err) {
//         console.log(err)
//     }
// }

// seedData()