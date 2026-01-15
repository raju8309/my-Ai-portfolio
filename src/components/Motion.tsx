import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type ClassNameProps = {
  className?: string;
};

export const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
} as const;

export const PageTransition = ({ children, className }: PropsWithChildren<ClassNameProps>) => {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
} as const;

export const Reveal = ({
  children,
  className,
  delay = 0,
  once = true,
}: PropsWithChildren<
  ClassNameProps & {
    delay?: number;
    once?: boolean;
  }
>) => {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const staggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
} as const;

export const Stagger = ({
  children,
  className,
  once = true,
  ...rest
}: PropsWithChildren<ClassNameProps & { once?: boolean } & MotionProps>) => {
  return (
    <motion.div
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className, delay = 0 }: PropsWithChildren<ClassNameProps & { delay?: number }>) => {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};
