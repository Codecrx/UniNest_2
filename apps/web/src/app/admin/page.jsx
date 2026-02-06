import RoleNav from "../../components/RoleNav";

const modules = [
  "User & KYC Management",
  "PG Verification",
  "Review Moderation",
  "SOS Command Center",
  "Subscription Revenue",
  "Analytics & Reports"
];

export default function AdminDashboard() {
  return (
    <>
      <RoleNav />
      <main>
        <h1>Super Admin Command Center</h1>
        <p className="badge" style={{ marginTop: "0.75rem", display: "inline-block" }}>
          Elevated Access
        </p>
        <div className="dashboard" style={{ marginTop: "2rem" }}>
          {modules.map((module) => (
            <div className="panel" key={module}>
              <h2>{module}</h2>
              <ul>
                <li>Live monitoring dashboards</li>
                <li>Escalation workflows</li>
                <li>Audit logs & exports</li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
