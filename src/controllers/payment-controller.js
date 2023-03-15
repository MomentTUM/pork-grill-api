const { Payment, Order, OrderItem, Table, Customer } = require('../models');
const cloudinary = require('../utils/cloudinary');

exports.addPayment = async (req, res, next) => {
  try {
    const result = await Order.create();

    res.status(201).json({ message: 'addCart success.' });
  } catch (err) {
    next(err);
  }
};

exports.paymentCustomer = async (req, res, next) => {
  const payment = await Customer.findAll({
    where: {},
    include: [
      {model: Table},
      {model: Payment},
      {model: Order, include: {model: OrderItem}}
    ]
  });
  res.status(200).json({ payment });
};
// exports.paymentCustomer = async (req, res, next) => {
//   const payment = await Payment.findAll({
//     where: { status: PAYMENT_PENDING },
//     include: {
//       model: Order,
//       include: {
//         model: Customer,
//         include: {
//           model: Table
//         }
//       }
//     }
//   });
//   res.status(200).json(payment);
// };

exports.createPayment = async (req, res, next) => {
  try {
    const value = req.body;
    console.log('111111', req.body);
    if (req.file.path) {
      value.slipImage = await cloudinary.upload(req.file.path);
    }
    // const payment = await Payment.create({ ...value, CustomerId: req.user.id });
    const payment = await Payment.create({ ...value, CustomerId: req.user.id, ...req.body });
    // const updateOrder = await Order.update(
    //   { PaymentId: payment.id }
    //   {
    //     where: {
    //       id: req.body.orderId
    //     }
    //   }
    // );
    res.status(200).json({ payment, message: 'upload slip complete' });
  } catch (error) {
    next(error);
  }
};

exports.updatePayment = async (req, res, next) => {
  try {
    const payment = await Payment.update(
      { status: 'COMPLETED' },
      { where: { CustomerId: req.params.CustomerId } }
    );
    await Order.destroy({
      where: { CustomerId: req.params.CustomerId },
      include: { model: OrderItem }
    });
    res.status(200).json({ payment, message: 'slip complete' });
  } catch (error) {
    next(error);
  }
};
