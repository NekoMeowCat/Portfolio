import { Link } from "@remix-run/react";


export default function TestRoute() {
  return (
    <div className="min-h-screen min-w-full border overflow-hidden">
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}
  