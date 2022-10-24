import { check, query,param, validationResult } from "express-validator"

const validateAddTicket = () => {
    return [
        check("paymentAmount", "paymentAmount is required").notEmpty(),
        check("paymentAmount", "paymentAmount must be a number").isNumeric().isFloat(),
        check("paymentAmount", "paymentAmount is to long").isLength({ max: 10 }),
        check("paymentAmount", "paymentAmount is negative").isLength({ min: 0 }),
        check("paymentReturn", "paymentReturn is required").notEmpty(),
        check("paymentReturn", "paymentReturn must be a number").isNumeric().isFloat(),
        check("paymentReturn", "paymentReturn is to long").isLength({ max: 10 }),
        check("paymentReturn", "paymentReturn is negative").isLength({ min: 0 }),
        check("orderId", "orderId is required").notEmpty(),
        check("orderId", "orderId must be a number").isNumeric().isInt(),
        check("orderId", "orderId is to long").isLength({ max: 5 }),
        check("orderId", "orderId is negative").isLength({ min: 0 }),
        check("branchId", "branchId is required").notEmpty(),
        check("branchId", "branchId must be a number").isNumeric().isInt(),
        check("branchId", "branchId is to long").isLength({ max: 5 }),
        check("branchId", "branchId is negative").isLength({ min: 0 }),
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
    ];
};

const validateUpdateTicket = () => {
    return [
        param('id', "Id Ticket must be a number").isNumeric().isInt(),
        param('id', 'Id Ticket is required').notEmpty(),
        check("paymentAmount", "paymentAmount is required").notEmpty(),
        check("paymentAmount", "paymentAmount must be a number").isNumeric().isFloat(),
        check("paymentAmount", "paymentAmount is to long").isLength({ max: 10 }),
        check("paymentAmount", "paymentAmount is negative").isLength({ min: 0 }),
        check("paymentReturn", "paymentReturn is required").notEmpty(),
        check("paymentReturn", "paymentReturn must be a number").isNumeric().isFloat(),
        check("paymentReturn", "paymentReturn is to long").isLength({ max: 10 }),
        check("paymentReturn", "paymentReturn is negative").isLength({ min: 0 }),
        check("orderId", "orderId is required").notEmpty(),
        check("orderId", "orderId must be a number").isNumeric().isInt(),
        check("orderId", "orderId is to long").isLength({ max: 5 }),
        check("orderId", "orderId is negative").isLength({ min: 0 }),
        check("branchId", "branchId is required").notEmpty(),
        check("branchId", "branchId must be a number").isNumeric().isInt(),
        check("branchId", "branchId is to long").isLength({ max: 5 }),
        check("branchId", "branchId is negative").isLength({ min: 0 }),
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
const validateDeleteTicket = () => {
    return [
        param('id', "Id Ticket must be a number").isNumeric().isInt(),
        param('id', 'Id Ticket is required').notEmpty(),
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

const validateGetTicketById=()=>{
    return [
        param('id', "Id Ticket must be a number").isNumeric().isInt(),
        param('id', 'Id Ticket is required').notEmpty(),
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

const validateGetTicketByOrder=()=>{
    return [
        query('orderId', "orderId Ticket must be a number").isNumeric().isInt(),
        query('orderId', 'orderId Ticket is required').notEmpty(),
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
const validateGetTableByPeriod=()=>{
    return [
        query('date', "date Ticket must be a number").isString(),
        query('date', 'date Ticket is required').notEmpty(),
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
    validateAddTicket,
    validateUpdateTicket,
    validateDeleteTicket,
    validateGetTableByPeriod,
    validateGetTicketByOrder,
    validateGetTicketById
}