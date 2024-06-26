import { siteconfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SiGithub, SiSpotify, SiX } from "react-icons/si";
import MainMobileNav from "./MainMobileNav";
import ToggleThemeButton from "./ThemeToggle";

function MenuNavbarEnd() {
  return (
    <div className="flex flex-1 items-center justify-end">
      <nav className="flex items-center space-x-2">
        <Link
          href={siteconfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex"
        >
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "w-10 px-0",
            )}
          >
            <SiGithub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link
          href={siteconfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex"
        >
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "w-10 px-0",
            )}
          >
            <SiX className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <Link
          href={siteconfig.links.spotify}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex"
        >
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "w-10 px-0",
            )}
          >
            <SiSpotify className="h-4 w-4" />
            <span className="sr-only">Spotify</span>
          </div>
        </Link>
        <ToggleThemeButton />
        <MainMobileNav />
      </nav>
    </div>
  );
}

export default MenuNavbarEnd;
