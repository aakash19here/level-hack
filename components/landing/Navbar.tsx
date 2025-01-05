import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slack } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4 lg:py-8">
        <div className="flex items-center">
          <Slack className="text-white size-8" />
        </div>
        <div>
          <Link
            href={"/chat"}
            className={cn(
              buttonVariants({
                className:
                  "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mx-3",
              })
            )}
          >
            App
          </Link>

          <Link
            href={process.env.NEXT_PUBLIC_GITHUB_REPO ?? ""}
            className={cn(
              buttonVariants({
                className:
                  "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mx-3",
              })
            )}
          >
            Github
          </Link>
        </div>
      </nav>
    </header>
  );
}
