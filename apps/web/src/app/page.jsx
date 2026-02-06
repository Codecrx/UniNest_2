import RoleNav from "../components/RoleNav";
import TourCanvas from "../components/TourCanvas";

export default function Home() {
  return (
    <>
      <RoleNav />
      <main>
        <section className="hero">
          <div className="hero-card">
            <span className="badge">Hostel & PG Management</span>
            <h1>UniNest keeps students safe while simplifying hostel operations.</h1>
            <p>
              Built with Next.js, Firebase, and real-time safety tooling. Explore booking,
              maintenance, payments, and SOS responses in one unified platform.
            </p>
            <div className="hero-actions">
              <button className="button">Launch Student Portal</button>
              <button className="button secondary">Schedule Owner Demo</button>
            </div>
          </div>
          <TourCanvas />
        </section>

        <section className="section-grid" id="safety">
          <div className="card">
            <h3>One-tap SOS</h3>
            <p>Immediate alerts to owners, admins, and guardians with real-time GPS.</p>
          </div>
          <div className="card">
            <h3>Live Notifications</h3>
            <p>Firebase Cloud Messaging delivers updates for bookings and incidents.</p>
          </div>
          <div className="card">
            <h3>Automated Email Ops</h3>
            <p>Templated transactional emails with retry logic and audit logs.</p>
          </div>
        </section>

        <section className="section-grid">
          <div className="card">
            <h3>Student Panel</h3>
            <p>Search PGs, manage bookings, rate food, and track rent in one dashboard.</p>
          </div>
          <div className="card">
            <h3>Owner Panel</h3>
            <p>Manage listings, maintenance, payments, and food ratings with analytics.</p>
          </div>
          <div className="card">
            <h3>Admin Command Center</h3>
            <p>Verify PGs, monitor SOS alerts, and run subscription revenue reporting.</p>
          </div>
        </section>

        <p className="footer">UniNest MVP · Firebase + Node.js + Next.js</p>
      </main>
    </>
  );
}
