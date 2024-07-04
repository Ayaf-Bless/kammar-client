import Link from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Logo from "@/components/logo/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  gap-4 py-8 md:py-10">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea
        tempora ducimus nobis maiores! Voluptate id maxime distinctio nobis?
        Expedita mollitia quisquam rem dignissimos? Iste sunt minus optio rem
        minima.
      </p>

      <Link href={"signin"}>Sign in</Link>
    </div>
  );
}
