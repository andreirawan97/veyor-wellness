import { CSSProperties, ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  style?: CSSProperties;
  rightIcon?: ReactElement;
  onClick?: () => void;
  className?: string;
};

export default function Button(props: Props) {
  const { label, rightIcon, onClick, className, style } = props;

  return (
    <motion.button
      className={`flex flex-row items-center py-2 px-3 bg-black border text-white w-fit rounded ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      style={style}
    >
      {label}

      {rightIcon && <div className="ml-1">{rightIcon}</div>}
    </motion.button>
  );
}
