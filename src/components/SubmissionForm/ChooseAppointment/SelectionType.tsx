import { motion } from "framer-motion";

type Props = {
  name: string;
  caption: string;
  onClick: () => void;
};

export default function SelectionType(props: Props) {
  const { name, caption, onClick } = props;

  return (
    <motion.div
      className="flex flex-col w-full border border-gray-300 p-4 transition-all text-black bg-white hover:text-white hover:bg-gray-600 mb-2 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
    >
      <p className="mb-4 font-bold">{name}</p>

      <p>{caption}</p>
    </motion.div>
  );
}
