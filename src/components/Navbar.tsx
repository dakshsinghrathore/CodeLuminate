'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="About">
        <HoveredLink href="https://github.com/dakshsinghrathore/CodeLuminate/blob/main/README.md" target="_blank">Readme</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        <HoveredLink href="https://twitter.com/dakshsinghrath9" target="_blank">X</HoveredLink>
        </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar
