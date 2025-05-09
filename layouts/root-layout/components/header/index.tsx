import Logo from "@shsfwork/components/custom/logo";
import Container from "@shsfwork/components/semantic-elements/container";
import ThemeSwitcher from "@shsfwork/components/custom/theme-switcher";

import MobileNav from "./components/mobile-nav";
import DesktopNav from "./components/desktop-nav";
import DiscordButton from "@shsfwork/components/custom/discord-button";
import GithubButton from "@shsfwork/components/custom/github-button";

export default function Header() {
  return (
    <header className="w-full">
      <Container id="header">
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center !gap-6">
            <Logo />
            <DesktopNav />
          </div>

          <div className="flex items-center justify-center gap-1">
            <DiscordButton />
            <GithubButton />
            <ThemeSwitcher />
          </div>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
