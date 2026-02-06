import RoleNav from "../../components/RoleNav";

const sections = [
  "Bookings & Requests",
  "SOS Alerts",
  "Rent & Payments",
  "Food Ratings",
  "Maintenance Tickets",
  "Document Vault"
];

export default function StudentDashboard() {
  return (
    <>
      <RoleNav />
      <main>
        <h1>Student Dashboard</h1>
        <p className="badge" style={{ marginTop: "0.75rem", display: "inline-block" }}>
          Live Preview
        </p>
        <div className="dashboard" style={{ marginTop: "2rem" }}>
          {sections.map((section) => (
            <div className="panel" key={section}>
              <h2>{section}</h2>
              <ul>
                <li>Track status & notifications</li>
                <li>Upload supporting media</li>
                <li>Chat with owner/admin</li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
