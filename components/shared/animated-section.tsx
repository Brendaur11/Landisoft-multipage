"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

import {
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  staggerContainerFast,
  heroStagger,
} from "@/lib/motion-variants";

export function FadeInView({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...props}
    />
  );
}

export function StaggerGrid({
  className,
  fast = false,
  ...props
}: HTMLMotionProps<"div"> & { fast?: boolean }) {
  return (
    <motion.div
      variants={fast ? staggerContainerFast : staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...props}
    />
  );
}

export function StaggerItem({
  className,
  small = false,
  ...props
}: HTMLMotionProps<"div"> & { small?: boolean }) {
  return (
    <motion.div
      variants={small ? fadeUpSmall : fadeUp}
      className={className}
      {...props}
    />
  );
}

export function HeroStagger({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate="show"
      className={className}
      {...props}
    />
  );
}

export function HeroItem({ className, ...props }: HTMLMotionProps<"div">) {
  return <motion.div variants={fadeUp} className={className} {...props} />;
}
