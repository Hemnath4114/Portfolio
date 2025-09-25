import { Navigation } from "../Navigation";
import { ThemeProvider } from "../ThemeProvider";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-96">
        <Navigation />
        <div className="pt-20 p-8">
          <p>Navigation bar with smooth scroll links and theme toggle.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}