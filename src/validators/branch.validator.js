import { check, query, param, validationResult } from "express-validator";

const validateAddNewBranch = () => {
    return [
        check("branchName", "name is required").notEmpty(),
        check("branchName", "name is too short").isLength({ min: 3 }),
        check("branchName", "name is too long").isLength({ max: 50 }),
        check("branchAddress", "address is required").notEmpty(),
        check("branchAddress", "address is too short").isLength({ min: 3 }),
        check("branchAddress", "address is too long").isLength({ max: 50 }),
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
const validateGetBranchById = () => {
    return [
        param("id", "Id branch must be a number").isNumeric().isInt(),
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

const validateGetBranchByBranchName = () => {
    return [
        query("branchName", "BranchName is required").notEmpty(),
        query("branchName", "BranchName is too short").isLength({ min: 3 }),
        query("branchName", "BranchName is too long").isLength({ max: 50 }),
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

const validateDeleteBranchById = () => {
    return [
        param("id", "Id branch must be a number").isNumeric().isInt(),
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

const validateUpdateBranchById = () => {
    return [
        param("id", "Id branch must be a number").isNumeric().isInt(),
        check("branchName", "name is required").notEmpty(),
        check("branchName", "name is too short").isLength({ min: 3 }),
        check("branchName", "name is too long").isLength({ max: 50 }),
        check("branchAddress", "address is required").notEmpty(),
        check("branchAddress", "address is too short").isLength({ min: 3 }),
        check("branchAddress", "address is too long").isLength({ max: 50 }),
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

export { validateAddNewBranch, validateGetBranchById, validateGetBranchByBranchName, validateDeleteBranchById, validateUpdateBranchById };