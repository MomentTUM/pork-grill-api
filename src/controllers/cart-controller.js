const { OrderItem, Order, Table, Customer, sequelize } = require('../models');

exports.addCartCustomer = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const result = await Order.create({ CustomerId: userId });
    for (const el of req.body.cartsItem) {
      await OrderItem.create({
        name: el.name,
        amount: el.amount,
        price: el.currentPrice,
        foodId: el.id,
        orderId: result.dataValues.id
      });
    }
    res.status(201).json({ message: 'addCart success.' });
  } catch (err) {
    next(err);
  }
};

exports.getListOrder = async (req, res, next) => {
  const orderItem = await OrderItem.findAll({
    where: {},
    include: {
      model: Order,
      where: { CustomerId: req.user.id },
      attributes: []
    },
    group: ['`OrderItem`.`food_id`'],
    attributes: [
      'name',
      [sequelize.fn('SUM', sequelize.col('price')), 'price'],
      [sequelize.fn('SUM', sequelize.col('amount')), 'amount']
    ]
  });
  res.status(200).json(orderItem);
};

// exports.getListOrderCustomer = async (req, res, next) => {
//   const orderItem = await OrderItem.findAll({
//     where: { orderStatus: 'PENDING' },
//     include: {
//       model: Order,
//       include: {
//         model: Customer,
//         include: {
//           model: Table,
//         }
//       }
//     }
//   });
//   res.status(200).json(orderItem);
// };
