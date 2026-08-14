export const ease = [0.17, 0.55, 0.55, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerContainerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
