import ProductRepository from "../repositories/Products.repository.js";
const prodRepository = new ProductRepository();

const addProduct = async (product) => {
    try {
        const prodAdded = await prodRepository.createProduct(product);
        return prodAdded;
    } catch (error) {
        return error;
    }
};

const getAllProducts = async () => {
    try {
        const products = await prodRepository.getAllProducts();
        return products;
    } catch (error) {
        return error;
    }
};

const getProductById = async (id) => {
    try {
        const product = await prodRepository.getProductById(id);
        return product;
    } catch (error) {
        return error;
    }
};

const getProductByName = async (name) => {
    try {
        const product = await prodRepository.getProductByName(name);
        return product;
    } catch (error) {
        return error;
    }
};

const updateProduct = async (id, product) => {
    try {
        const productUpdated = await prodRepository.updateProduct(id, product);
        return productUpdated;
    } catch (error) {
        return error
    }
}
const deleteProduct = async (id) => {
    try {
        const prodDeleted = await prodRepository.deleteProduct(id);
        return prodDeleted;
    } catch (error) {
        return error;
    }
}
export { addProduct, getAllProducts, getProductById, getProductByName, updateProduct, deleteProduct };
