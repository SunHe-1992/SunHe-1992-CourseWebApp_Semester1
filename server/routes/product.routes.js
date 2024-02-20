import express from 'express'
import productCtrl from '../controllers/product.controller.js'
const router = express.Router()

router.param('id', productCtrl.itemById)
//get all products and find all products name contains xx
router.route('/api/products').get(productCtrl.list)
//get 1 product by id
router.route('/api/products/:id').get(productCtrl.read)
//add new product
router.route('/api/products').post(productCtrl.create)
//update 1 product by id
router.route('/api/products/:id').put(productCtrl.update)
//delete 1 product by id
router.route('/api/products/:id').delete(productCtrl.remove)
//delete all products
router.route('/api/products').delete(productCtrl.removeAll)
export default router
