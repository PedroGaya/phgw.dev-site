import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const article = tv({
  base: "prose dark:prose-invert",
  variants: {
    body: {
      true: "prose-lg",
    },
    title: {
      true: "text-[2.3rem] leading-9 font-semibold mb-4",
    },
    subtitle: {
      true: "text-[1rem] italic",
    },
  },
  defaultVariants: {
    body: false,
    title: false,
    subtitle: false,
  },
});

export const blogListItem = tv({
  base: "prose dark:prose-invert",
  variants: {
    title: {
      true: "text-[1.5rem] leading-snug font-bold",
    },
    date: {
      true: "text-[0.9rem] leading-snug italic",
    },
    subtitle: {
      true: "my-2",
    },
    readMore: {
      true: "text-[1.1rem] leading-snug font-semibold",
    },
  },
  defaultVariants: {
    body: false,
    title: false,
    subtitle: false,
  },
});
