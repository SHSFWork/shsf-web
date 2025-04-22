import Logo from "@shsfwork/components/custom/logo";
import Container from "@shsfwork/components/semantic-elements/container";
import ThemeSwitcher from "@shsfwork/components/custom/theme-switcher";

import MobileNav from "./components/mobile-nav";
import DesktopNav from "./components/desktop-nav";
import DiscordButton from "@shsfwork/components/custom/discord-button";

export default function Header() {
  return (
    <header className="w-full">
      <Container id="header">
        <nav className="hidden h-16 items-center justify-between md:flex">
          <div className="flex items-center gap-6">
            <Logo />
            <DesktopNav />
          </div>

          <div className="flex items-center justify-center gap-1.5">
            <DiscordButton />
            <ThemeSwitcher />
          </div>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
