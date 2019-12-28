const orderService = require('../../services/orderService')

let orderController = {
  getOrders: (req, res) => {
    orderService.getOrders(req, res, data => {
      return res.json(data)
    })
  },
  postOrder: (req, res) => {
    orderService.postOrder(req, res, data => {
      return res.json(data)
    })
  },
  cancelOrder: (req, res) => {
    orderService.cancelOrder(req, res, data => {
      return res.json(data)
    })
  },
  spgatewayCallback: (req, res) => {
    orderService.spgatewayCallback(req, res, data => {
      return res.json(data)
    })
  }
}

module.exports = orderController
