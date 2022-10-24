import ProductRepository from "../repositories/Products.repository.js";
const prodRepository = new ProductRepository();

const addProduct = async (req, res, next) => {
    try {
        const { name, basePrice, cost, availability, taxes, type, stock } = req.body;
        const productToAdd = {name, basePrice, cost, availability, taxes, type, stock };
        const prodAdded = await prodRepository.createProduct(productToAdd);
        req.idProduct = prodAdded.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error while adding product" });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await prodRepository.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all products" });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prodRepository.getProductById(id);
        if (!product) res.status(404).json("This product doesn't exist");
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying product by id" });
    }
};

const getProductByName = async (req, res) => {
    try {
        const { name } = req.query;
        const product = await prodRepository.getProductByName(name);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying product by name" });
    }
};

const getProductByType = async (req, res) => {
    try {
        const { type } = req.query;
        const products = await prodRepository.getProductByType(type);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying product by type" });
    }
};

const updateProduct = async (req, res,next) => {
    try {
        const { id } = req.params;
        const { name, basePrice, cost, availability, taxes, type, stock } = req.body;
        const productToAdd = {name, basePrice, cost, availability, taxes, type, stock };
        const productsUpdated = await prodRepository.updateProduct(id, productToAdd);
        if (productsUpdated[0] === 0)
            return res.status(404).json({ msg: "This product wasn't updated" });
        return res.status(200).json({ msg: "Product updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating product" });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const prodDeleted = await prodRepository.deleteProduct(id);
        if (!prodDeleted) return res.status(404).json({ msg: "This product wasn't deleted" });
        return res.status(200).json({ msg: "Product deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting product" });
    }
};
export {
    addProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    getProductByType,
    updateProduct,
    deleteProduct,
};
