import { motion } from "framer-motion";

interface FloatingCardProps {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

const FloatingCard = ({ className = "", delay = 0, children }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`card-glass rounded-xl border border-border/50 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;