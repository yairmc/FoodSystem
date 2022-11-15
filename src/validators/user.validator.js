import { check, query, param, validationResult } from "express-validator";

const validateAddNewUser = () => {
    return [
        check("name", "name is required").notEmpty(),
        check("name", "name is too short").isLength({ min: 3 }),
        check("name", "name is too long").isLength({ max: 50 }),
        check("userName", "userName is required").notEmpty(),
        check("userName", "userName is too short").isLength({ min: 3 }),
        check("userName", "userName is too long").isLength({ max: 50 }),
        check("password", "password is required").notEmpty(),
        check("password", "password is too short").isLength({ min: 5 }),
        check("roleId", "id role is required").notEmpty(),
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
const validateGetUserByUsername = () => {
    return [
        query("username", "username is required").notEmpty(),
        query("username", "username is too short").isLength({ min: 3 }),
        query("username", "username is too long").isLength({ max: 50 }),
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
const validateGetUserById = () => {
    return [
        param("id", "Id user must be a number").isNumeric().isInt(),
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
const validateDeleteUserById = () => {
    return [
        param("id", "Id user must be a number").isNumeric().isInt(),
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
const validateUpdateUserById = () => {
    return [
        param("id", "Id user must be a number").isNumeric().isInt(),
        check("name", "name is too short").optional().isLength({ min: 3 }),
        check("name", "name is too long").optional().isLength({ max: 50 }),
        check("userName", "userName is too short").optional().isLength({ min: 3 }),
        check("userName", "userName is too long").optional().isLength({ max: 50 }),
        check("password", "password is too short").optional().isLength({ min: 5 }),
        check("password", "password is too long").optional().isLength({ max: 30 }),
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

export {
    validateAddNewUser,
    validateGetUserByUsername,
    validateGetUserById,
    validateDeleteUserById,
    validateUpdateUserById
};
