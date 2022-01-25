export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const headerAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 1, delay: 0.5 },
  },
};

export const svgAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 1, delay: 0.5 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
      delay: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 0.2 },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const scrollRevealRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const projectContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      ease: "easeOut",
      duration: 0.1,
      when: "beforeChildren",
    },
  },
};
