"use client";

import { motion } from "framer-motion";

type MotionWrapperProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
