import { ThemeProvider } from "../ThemeProvider";

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-4 space-y-2">
        <p>Theme provider is working! Check the theme toggle in navigation.</p>
        <p className="text-muted-foreground">This text adapts to theme changes.</p>
      </div>
    </ThemeProvider>
  );
}