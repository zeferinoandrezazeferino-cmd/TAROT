import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden
      fill="none"
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M19.2 7.8c-5 1.5-8.4 6.2-8.2 11.4.1 3.2 1.6 6 4 7.7 4.2-1.4 6.8-5.6 6.4-10.2-.3-3.2-2-6-4.4-7.6.8-.5 1.5-1 2.2-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
