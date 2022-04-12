import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from '../data';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />
}

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const searchEvent = (event) => {
    let filter = event.target.value;
    console.log("Inside the searchEvent const, filter is:", filter)
    if (filter) {
      setSearchParams({ filter })
    } else {
      setSearchParams({})
    }
  }

  const invoiceFilter = (invoice) => {
    console.log("Inside the invoiceFilter const, invoice is:", invoice)
    let filter = searchParams.get("filter");
    console.log("Inside the invoiceFilter const, filter is:", filter)
    if (!filter) return true;
    let name = invoice.name.toLowerCase();
    console.log("Inside the invoiceFilter const, name is:", name);
    console.log("name.startsWith(filter.toLowerCase())", name.startsWith(filter.toLowerCase()));
    return name.startsWith(filter.toLowerCase());
  }
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        Filter: <input value={searchParams.get("filter") || ""}
          onChange={searchEvent} />
        {invoices
          .filter(invoiceFilter)
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                }
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}