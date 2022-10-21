import { check, query, param, validationResult } from "express-validator";

const validateAddTable = () => {
    return [
        check("number", "Number is requiered").notEmpty(),
        check("number", "Number must be a number").isNumeric().isInt(),
        check("number", "Number is to long").isLength({ max: 5 }),
        check("availability", "Availability is requiered").notEmpty(),
        check("availability", "Must be true or false").isBoolean(),
        check("dinersNumber", " DinersNumber are requiered").notEmpty(),
        check("dinersNumber", "DinersNumber must be number").isNumeric().isInt(),
        check("dinersNumber", "DinersNumber is to short").isLength({ min: 1 }),
        check("dinersNumber", "DinersNumber is to long").isLength({ max: 18 }),
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

const validateUpdateTable = () => {
    return [
        param('id', "Id table must be a number").isNumeric().isInt(),
        param('id', 'Id table is required').notEmpty(),
        check("number", "Number is requiered").notEmpty(),
        check("number", "Number must be a number").isNumeric().isInt(),
        check("number", "Number is to long").isLength({ max: 5 }),
        check("availability", "Availability is requiered").notEmpty(),
        check("availability", "Must be true or false").isBoolean(),
        check("dinersNumber", " DinersNumber are requiered").notEmpty(),
        check("dinersNumber", "DinersNumber must be number").isNumeric().isInt(),
        check("dinersNumber", "DinersNumber is to short").isLength({ min: 1 }),
        check("dinersNumber", "DinersNumber is to long").isLength({ max: 18 }),
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

const validateDeleteTable = () => {
    return [
        param('id', "Id table must be a number").isNumeric().isInt(),
        param('id', 'Id table is required').notEmpty(),
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

const validateGetTableById = () => {
    return [
        param('id', "Id table must be a number").isNumeric().isInt(),
        param('id', 'Id table is required').notEmpty(),
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

const validateGetTableByNumber = () => {
    return [
        query("number", "Number is requiered").notEmpty(),
        query("number", "Number must be a number").isNumeric().isInt(),
        query("number", "Number is to long").isLength({ max: 5 }),
        query("availability", "Availability is requiered").notEmpty(),
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
    validateAddTable,
    validateUpdateTable,
    validateDeleteTable,
    validateGetTableById,
    validateGetTableByNumber,
}