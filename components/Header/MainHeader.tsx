import MainMenuNavbar from "./MainMenuNavbar";

export function MainHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MainMenuNavbar />
    </header>
  );
}
