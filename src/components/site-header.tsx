import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="flex items-center gap-2.5 text-foreground">
          <Mark />
          <span className="font-serif text-lg tracking-wide sm:text-xl">
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppCta size="sm" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-border bg-background px-5 py-4 md:hidden",
          open && "block",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <WhatsAppCta className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
