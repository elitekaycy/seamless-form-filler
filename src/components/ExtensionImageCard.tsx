import { motion } from "framer-motion";

interface ExtensionImageCardProps {
  imageSrc?: string;
  alt: string;
  className?: string;
  delay?: number;
}

const ExtensionImageCard = ({ 
  imageSrc, 
  alt, 
  className = "", 
  delay = 0 
}: ExtensionImageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`card-glass rounded-xl border border-border/50 overflow-hidden ${className}`}
    >
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-secondary/30 p-4">
          <span className="text-xs text-muted-foreground text-center">
            Extension Screenshot
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ExtensionImageCard;