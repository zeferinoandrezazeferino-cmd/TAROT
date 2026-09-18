import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  children?: ReactNode;
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
};

export function WhatsAppCta({
  message = site.defaultMessage,
  children = "Agendar no WhatsApp",
  className,
  size = "lg",
  variant = "default",
}: Props) {
  return (
    <Button asChild size={size} variant={variant} className={cn(className)}>
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ArrowUpRight />
      </a>
    </Button>
  );
}
