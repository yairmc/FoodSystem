import ProductRepository from "../repositories/Products.repository.js";
const prodRepository = new ProductRepository();

const addProduct = async (product) => {
    try {
        const prodAdded = await prodRepository.create(product);
        return prodAdded;
    } catch (error) {
        return error;
    }
};

const getAllProducts = async () => {
    try {
        const products = await prodRepository.findAll();
        return products;
    } catch (error) {
        return error;
    }
};

const getProductById = async (id) => {
    try {
        const product = await prodRepository.findOne(id);
        return product;
    } catch (error) {
        return error;
    }
};

const getProductByName = async (name) => {
    try {
        const product = await prodRepository.findByName(name);
        return product;
    } catch (error) {
        return error;
    }
};

const updateProduct = async (id, product) => {
    try {
        const productUpdated = await prodRepository.update(id, product);
        return productUpdated;
    } catch (error) {
        return error
    }
}
const deleteProduct = async (id) => {
    try {
        const prodDeleted = await prodRepository.delete(id);
        return prodDeleted;
    } catch (error) {
        return error;
    }
}
export { addProduct, getAllProducts, getProductById, getProductByName, updateProduct, deleteProduct };
