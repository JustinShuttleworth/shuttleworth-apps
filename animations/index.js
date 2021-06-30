export const easing = [0.175, 0.85, 0.42, 0.96];

export const listVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
      staggerChildren: .25,
      delayChildren: 0.75
    }
  },
  exit: {
    opacity: 0,
    y:30,
    // transition: {duration: .25,}
    transition: { staggerChildren: 0.1, staggerDirection: -1 }
  }
};
export const itemVariants = {
  initial: {
    y: 50,
    opacity: 0,
    // transition: {
    //   y: { stiffness: 1000 }
    // }
  },
  enter: {
    y: 0,
    opacity: 1,
    // transition: {
    //   y: { stiffness: 1000, velocity: -100 }
    // }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

export const slideInUp = {
  exit: {
    y: 100,
    opacity: 0,
    transition: { staggerChildren: 0.09, delayChildren: 0.3 }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.3 }
  },
  initial: {
    y: 100,
    opacity: 0,
    transition: { staggerChildren: 0.09, delayChildren: 0.3, duration: 0.2, ease: easing }
  }
};

export const delayedSlideInUp = {
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: easing }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: easing
    }
  }
};

export const slideInLeft = {
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.4, ease: easing }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

export const slideInRight = {
  exit: { x: 150, opacity: 0, transition: { duration: 0.4, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
};

export const sideBarContainer = {
  open: {
    transition: { staggerChildren: 0.09, delayChildren: 0.7, duration: .4 },
    opacity: 1,
    x: 0,
  },
  closed: {
    transition: { staggerChildren: 0.09, delayChildren: 0.7, duration: .4 },
    opacity: 0,
    x: 75,
  },
  exit: { opacity: 0, transition: { duration: 0.4, ease: easing } },
}

export const sideBarVariants = {
  open: {
    transition: { staggerChildren: 0.09, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const sideBarItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
