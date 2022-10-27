// this file acepting just name whit string
import { check, query, param, validationResult } from "express-validator";

const validateAddRole = () => {
    return [
        check("name", "Name is required").notEmpty(),
        check("name", "Name is to Long").isLength({ max: 30 }),
        check("name", "Name is to short").isLength({ min: 5 }),
        check("name", "Name must be character").isString(),
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

const validateUpdateRole = () => {
    return [
        check("id", "id role is required").notEmpty(),
        check("id", "id role must be a number").isNumeric().isInt(),
        check("name", "Name is required").notEmpty(),
        check("name", "Name is to Long").isLength({ max: 30 }),
        check("name", "Name is to short").isLength({ min: 5 }),
        check("name", "Name must be character").isString(),
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

const validateDeleteRole = () => {
    return [
        param('id', "Id role must be a number").isNumeric().isInt(),
        param('id', 'Id role is required').notEmpty(),
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

const validateGetRoleById = () => {

    return [
        param('id', "Id role must be a number").isNumeric().isInt(),
        param('id', 'Id role is required').notEmpty(),
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
    validateAddRole,
    validateUpdateRole,
    validateDeleteRole,
    validateGetRoleById
}