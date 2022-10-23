import { check, query, param, validationResult } from "express-validator";

const validateAddNewProduct = () => {
    return [
        check("name", "name is required").notEmpty(),
        check("name", "name is too short").isLength({ min: 3 }),
        check("name", "name is too long").isLength({ max: 50 }),
        check("basePrice", "basePrice is required").notEmpty(),
        check("basePrice").custom((value) => {
            if (typeof value !== "number") throw new Error("basePrice must be numeric")
            return true;
        }),
        check("cost", "Cost is required").notEmpty(),
        check("cost").custom((value) => {
            if (typeof value !== "number") throw new Error("cost must be numeric")
            return true;
        }),
        check("availability", "availability is required").notEmpty(),
        check("availability", "availability must be boolean").isBoolean(),
        check("taxes", "taxes is required").notEmpty(),
        check("taxes", "taxes must be numeric").isNumeric(),
        check("type", "type is required").notEmpty(),
        check("type", "type must be string").isString(),
        check("stock", "stock is required").notEmpty(),
        check("stock", "stock must be numeric integer").isNumeric().isInt(),
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

const validateUpdateProduct = () => {
    return [
        param("id", "Id product must be a number").isNumeric(),
        check("name", "name is too short").isLength({ min: 3 }),
        check("name", "name is too long").isLength({ max: 50 }),
        check("basePrice").custom((value) => {
            if (typeof value !== "number") throw new Error("basePrice must be numeric")
            return true;
        }),
        check("cost").custom((value) => {
            if (typeof value !== "number") throw new Error("cost must be numeric")
            return true;
        }),
        check("availability", "availability must be boolean").isBoolean(),
        check("taxes", "taxes must be numeric").isNumeric(),
        check("type", "type must be string").isString(),
        check("stock", "stock must be numeric integer").isNumeric().isInt(),
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


const validateDeleteProductById = () => {
    return [
        param("id", "Id product must be a number").isNumeric(),
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

const validateGetProductById = () => {
    return [
        param("id", "Id product must be a number").isNumeric(),
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

const validateGetProductByName = () => {
    return [
        query("name", "name is required").notEmpty(),
        query("name", "name is too short").isLength({ min: 3 }),
        query("name", "name is too long").isLength({ max: 50 }),
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
const validateGetProductByType = () => {
    return [
        query("type", "type is required").notEmpty(),
        query("type").custom((value) => {
            if ((value !== "Prepared") && (value !== "Packaged")) throw new Error("Type must be 'Prepared' or 'Packaged")
            return true;
        }),
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

export { validateAddNewProduct, validateUpdateProduct, validateDeleteProductById, validateGetProductById, validateGetProductByName, validateGetProductByType };