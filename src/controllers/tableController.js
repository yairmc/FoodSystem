import { TableRepository } from '../repositories/Tables.repository.js'
const tableRepository = new TableRepository();

const addTable = async (req, res) => {
    try {
        const tableAux = await tableRepository.createTable(req.body)
        res.status(200).json(tableAux)
    } catch (error) {
        res.status(500).json({ msg: "Error while adding table" })
    }
}
const updateTable = async (req, res) => {
    try {
        const { id } = req.params;
        const tableAux = await tableRepository.updateTable(id, req.body);
        if (tableAux[0] === 0) return res.status(404).json({ msg: "This table wasn't updated" })
        res.status(200).json({ msg: "Table updated" })
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating user" });
    }
}
const deleteTable = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTable = tableRepository.deleteTable(id);
        if (!deleteTable) return res.status(404).json({ msg: "This table wasn't deleted" });
        res.status(200).json({ msg: "Table deleted" })
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting table" })
    }
}
const getTableById = async (req, res) => {
    try {
        const { id } = req.params;
        const table = await tableRepository.findOneTable(id);
        if (!table) return res.status(404).json({ msg: "This table doesn't exist" });
        res.status(200).json(table)
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying table" });
    }
}
const getTableByNumber = async (req, res) => {
    try {
        const { number } = req.params;
        const table = await tableRepository.findOneTableNumber(number);
        if (!table) return res.status(404).json({ msg: "This table doesn't exist" });
        res.status(200).json(table)
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying table" });
    }
}
const getAllTables = async (req, res) => {
    try {
        const tables = await TableRepository.findAllTables();
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ msg: "Error while queryng all tables" })
    }
}

export { addTable, updateTable, deleteTable, getTableById, getTableByNumber, getAllTables, }