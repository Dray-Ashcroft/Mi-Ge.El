import { Switch, Route } from "wouter";
import NotFound from "./pages/not-found";

function SimulationPage() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}meiosis.html`}
      style={{ width: "100%", height: "100vh", border: "none", display: "block" }}
      title="Meiosis Visualization"
    />
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={SimulationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
