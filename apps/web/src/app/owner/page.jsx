import RoleNav from "../../components/RoleNav";

const panels = [
  "Property Listings",
  "Booking Requests",
  "Maintenance Queue",
  "Food Menu & Ratings",
  "Rent Tracker",
  "Security & SOS"
];

export default function OwnerDashboard() {
  return (
    <>
      <RoleNav />
      <main>
        <h1>Owner Control Panel</h1>
        <p className="badge" style={{ marginTop: "0.75rem", display: "inline-block" }}>
          Verification Pending
        </p>
        <div className="dashboard" style={{ marginTop: "2rem" }}>
          {panels.map((panel) => (
            <div className="panel" key={panel}>
              <h2>{panel}</h2>
              <ul>
                <li>Manage data in Firestore</li>
                <li>Automated reminders</li>
                <li>Insights & analytics</li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
