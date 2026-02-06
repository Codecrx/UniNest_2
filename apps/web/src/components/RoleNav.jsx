export default function RoleNav() {
  return (
    <header>
      <div>
        <strong>UniNest</strong>
        <span className="badge" style={{ marginLeft: "0.75rem" }}>
          Full-stack MVP
        </span>
      </div>
      <nav>
        <a href="/student">Student</a>
        <a href="/owner">Owner</a>
        <a href="/admin">Super Admin</a>
        <a href="/#safety">Safety</a>
      </nav>
    </header>
  );
}
