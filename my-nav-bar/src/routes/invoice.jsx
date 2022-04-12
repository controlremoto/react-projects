import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    console.log("Params.invoiceId:", params.invoiceId)
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    console.log("Inside Invoice function, invoice value is:", invoice)

    const deleteFromInvoice = () => {
        deleteInvoice(invoice.number);
        navigate("/invoices" + location.search)
    }

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button onClick={deleteFromInvoice} >Delete</button>
            </p>
        </main>
    )
}
