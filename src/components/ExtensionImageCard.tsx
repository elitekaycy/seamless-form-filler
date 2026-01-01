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
      className={`card-glass rounded-2xl border border-border/40 overflow-hidden backdrop-blur-md ${className}`}
    >
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/40 to-secondary/20 p-6">
          <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs text-muted-foreground text-center font-medium">
            Extension Screenshot
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ExtensionImageCard;