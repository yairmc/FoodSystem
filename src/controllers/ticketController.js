import TicketRepository from '../repositories/Tickets.repository.js'
const ticketRepository = new TicketRepository();

const addTicket = async (req, res) => {
    try {
        const ticketAux = await ticketRepository.createTicket(req.body);
        res.status(200).json(ticketAux);
    } catch (error) {
        res.status(500).json({ msg: "Error while adding tickets" })
    }
}

const updatedTicket = async (req, res) => {
    try {
        const { id } = req.params;
        await ticketRepository.updateTicket(id, req.body);
        res.status(200).json({ msg: "Ticket updated" })
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating ticket" });
    }
}

const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        await ticketRepository.deleteTicket(id);
        res.status(200).json({ msg: "Ticket deleted" });
    } catch (error) {
        res.status(500).json({ msg: "Error while deleting ticket" })
    }

}

const getTicketById = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await ticketRepository.getTicketById(id);
        if (!ticket) return res.status(404).json({ msg: "This ticket doesn't exist" });
        res.status(200).json(ticket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error while queryng ticket" })
    }
}

// const getTicketByDate = (req, res) => {

// }

// const getTicketByOrder = (req, res) => {

// }

const getAllTickets = async (req, res) => {
    try {
        const tickets = await ticketRepository.getAllTickets();
        res.status(200).json(tickets)
    } catch (error) {
        return res.status(500).json({ msg: "Error while queryng all tickets" })
    }
}

export { addTicket, getAllTickets, getTicketById, updatedTicket, deleteTicket }