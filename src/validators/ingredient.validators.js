import { check, query, param, validationResult } from "express-validator";

const validateAddIngredient = () => {
    return [
        check("name", "Name is requiered").notEmpty(),
        check("name", "Name is to long").isLength({ max: 50 }),
        check("name", "Name is to short").isLength({ min: 2 }),
        check("stock", "Stock  is requiered").notEmpty(),
        check("stock", "Stock must be number").isNumeric().isInt(),
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

const validateUpdateIngredient = () => {
    return [
        param('id', "Id ingredient must be a number").isNumeric().isInt(),
        param('id', 'Id ingredient is required').notEmpty(),
        check("name", "Name is requiered").notEmpty(),
        check("name", "Name is to long").isLength({ max: 50 }),
        check("name", "Name is to short").isLength({ min: 2 }),
        check("stock", "Stock  is requiered").notEmpty(),
        check("stock", "Stock must be number").isNumeric().isInt(),
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

const validateDeleteIngredient = () => {
    return [
        param('id', "Id ingredient must be a number").isNumeric().isInt(),
        param('id', 'Id ingredient is required').notEmpty(),
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

const validateGetIngredientById = () => {
    return [
        param('id', "Id ingredient must be a number").isNumeric().isInt(),
        param('id', 'Id ingredient is required').notEmpty(),
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

const validateGetIngredientByName = () => {
    return [
        check("name", "Name is requiered").notEmpty(),
        check("name", "Name is to long").isLength({ max: 50 }),
        check("name", "Name is to short").isLength({ min: 2 }),
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
    validateAddIngredient,
    validateUpdateIngredient,
    validateDeleteIngredient,
    validateGetIngredientById,
    validateGetIngredientByName
}