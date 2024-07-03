
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "./theme-provider";

function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between items-center sticky top-8 bg-inherit">
      <Icons.aiStars className="w-12 sm:w-8" />
      <div className="flex items-center gap-8 sm:gap-4">
        <a
          href="https://github.com/PrinceAnumba/Google_AI_Studio_App_2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="sm:text-xs" >
            <Icons.gitHub className="w-6 mr-2 sm:w-4" />
            <span className="sm:hidden">Source Code</span>
          </Button>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className=" focus:ring-0 focus:outline-none focus-visible:ring-0"
              variant="outline"
              size="icon"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
