import Navbar from "./components/Navbar";
import Router from "./app/router";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Router />
    </div>
  );
}
