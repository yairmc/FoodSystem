import { check, query, param, validationResult } from 'express-validator';

const validateAddOrder = () => {
    return [
        check("state", "State order is required").notEmpty(),
        check("state", "State order must be a number").isNumeric().isInt(),
        check("state", "State order is to Long").isLength({ max: 20 }),
        check("state", "State order is to short").isLength({ min: 0 }),
        check("total", "Total order is required").notEmpty(),
        check("total", "Total order must be a number").isNumeric().isFloat(),
        check("total", "Total order is to Long").isLength({ max: 20 }),
        check("total", "Total order is to short").isLength({ min: 0 }),
        check("subTotal", "subTotal order is required").notEmpty(),
        check("subTotal", "subTotal order must be a number").isNumeric().isFloat(),
        check("subTotal", "subTotal order is to Long").isLength({ max: 20 }),
        check("subTotal", "subTotal order is to short").isLength({ min: 0 }),
        check("userId", "userId order is required").notEmpty(),
        check("userId", "userId order must be a number").isNumeric().isInt(),
        check("userId", "userId order is to Long").isLength({ max: 20 }),
        check("userId", "userId order is to short").isLength({ min: 0 }),
        check("tableId", "tableId order is required").notEmpty(),
        check("tableId", "tableId order must be a number").isNumeric().isInt(),
        check("tableId", "tableId order is to Long").isLength({ max: 20 }),
        check("tableId", "tableId order is to short").isLength({ min: 0 }),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ]
}

const validateUpdateOrder = () => {
    return [
        param('id', "Id order must be a number").isNumeric().isInt(),
        param('id', 'Id order is required').notEmpty(),
        check("state", "State order is required").notEmpty(),
        check("state", "State order must be a number").isNumeric().isInt(),
        check("state", "State order is to Long").isLength({ max: 20 }),
        check("state", "State order is to short").isLength({ min: 0 }),
        check("total", "Total order is required").notEmpty(),
        check("total", "Total order must be a number").isNumeric().isFloat(),
        check("total", "Total order is to Long").isLength({ max: 20 }),
        check("total", "Total order is to short").isLength({ min: 0 }),
        check("subTotal", "subTotal order is required").notEmpty(),
        check("subTotal", "subTotal order must be a number").isNumeric().isFloat(),
        check("subTotal", "subTotal order is to Long").isLength({ max: 20 }),
        check("subTotal", "subTotal order is to short").isLength({ min: 0 }),
        check("userId", "userId order is required").notEmpty(),
        check("userId", "userId order must be a number").isNumeric().isInt(),
        check("userId", "userId order is to Long").isLength({ max: 20 }),
        check("userId", "userId order is to short").isLength({ min: 0 }),
        check("tableId", "tableId order is required").notEmpty(),
        check("tableId", "tableId order must be a number").isNumeric().isInt(),
        check("tableId", "tableId order is to Long").isLength({ max: 20 }),
        check("tableId", "tableId order is to short").isLength({ min: 0 }),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ]
}

const validateDeleteOrder = () => {
    return [
        param('id', "Id order must be a number").isNumeric().isInt(),
        param('id', 'Id order is required').notEmpty(),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ]
}

const validateGetOrderById = () => {
    return [
        param('id', "Id order must be a number").isNumeric().isInt(),
        param('id', 'Id order is required').notEmpty(),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ]
}

export {
    validateAddOrder,
    validateUpdateOrder,
    validateDeleteOrder,
    validateGetOrderById,
}