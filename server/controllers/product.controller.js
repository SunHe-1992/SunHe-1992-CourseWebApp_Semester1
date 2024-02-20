import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        return res.status(200).json({
            message: "Successfully created product!"
        })
    }
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        if (req.query.name) {
            let searchName = req.query.name;
            let allList = await Product.find().select('name description updated created price quantity category')
            let items = [];
            for (let i = 0; i < allList.length; i++) {
                if (allList[i].name.includes(searchName))
                    items.push(allList[i])
            }
            res.json(items)
        }
        else {
            let items2 = await Product.find().select('name description updated created price quantity category')
            res.json(items2)
        }
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const itemById = async (req, res, next, id) => {
    try {
        let item = await Product.findById(id)
        if (!item)
            return res.status('400').json({
                error: "Product not found"
            })
        req.profile = item
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve user"
        })
    }
}

const update = async (req, res) => {
    try {
        let item = req.profile
        item = extend(item, req.body)
        item.updated = Date.now()
        await item.save()
        res.json(item)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const remove = async (req, res) => {
    try {
        let item = req.profile
        let deletedItem = await item.deleteOne()
        res.json(deletedItem)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const removeAll = async (req, res) => {
    try {
        let items = await Product.find().select('name description updated created price quantity category')
        let count = items.length
        for (let i = 0; i < items.length; i++) {
            await items[i].deleteOne();
        }
        res.json("deleted all count = " + count)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const read = (req, res) => {
    return res.json(req.profile)
}

export default { create, list, itemById, update, remove, removeAll, read }