const adminService = require('../../services/adminService')

const adminController = {
  getProducts: (req, res) => {
    adminService.getProducts(req, res, data => {
      return res.json(data)
    })
  },

  getProduct: (req, res) => {
    adminService.getProduct(req, res, data => {
      return res.json(data)
    })
  },

  addProduct: (req, res) => {
    adminService.addProduct(req, res, data => {
      return res.json(data)
    })
  },

  deleteProduct: (req, res) => {
    adminService.deleteProduct(req, res, data => {
      return res.json(data)
    })
  },

  deleteImage: (req, res) => {
    adminService.deleteImage(req, res, data => {
      return res.json(data)
    })
  },

  putProduct: (req, res) => {
    adminService.putProduct(req, res, data => {
      return res.json(data)
    })
  },

  getProductStocks: (req, res) => {
    adminService.getProductStocks(req, res, data => {
      return res.json(data)
    })
  },

  getProductStockEdit: (req, res) => {
    adminService.getProductStockEdit(req, res, data => {
      return res.json(data)
    })
  },

  putProductStockProps: (req, res) => {
    adminService.putProductStockProps(req, res, data => {
      return res.json(data)
    })
  },

  addProductStockProps: (req, res) => {
    adminService.addProductStockProps(req, res, data => {
      return res.json(data)
    })
  },

  deleteProductStockProp: (req, res) => {
    adminService.deleteProductStockProp(req, res, data => {
      return res.json(data)
    })
  },

  getOrders: (req, res) => {
    adminService.getOrders(req, res, data => {
      return res.json(data)
    })
  },

  getOrder: (req, res) => {
    adminService.getOrder(req, res, data => {
      return res.json(data)
    })
  },

  putOrder: (req, res) => {
    adminService.putOrder(req, res, data => {
      return res.json(data)
    })
  },

  deleteOrder: (req, res) => {
    adminService.deleteOrder(req, res, data => {
      return res.json(data)
    })
  },

  deleteOrderProduct: (req, res) => {
    adminService.deleteOrderProduct(req, res, data => {
      return res.json(data)
    })
  },

  getCategories: (req, res) => {
    adminService.getCategories(req, res, data => {
      return res.json(data)
    })
  },

  getUsers: (req, res) => {
    adminService.getUsers(req, res, data => {
      return res.json(data)
    })
  },

  getUserOrders: (req, res) => {
    adminService.getUserOrders(req, res, data => {
      return res.json(data)
    })
  }
}

module.exports = adminController
