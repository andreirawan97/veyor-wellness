import { FaRegCircle } from "react-icons/fa6";

export type RadioGroupItem = {
  value: string;
  label: string;
};

type Props = {
  items: RadioGroupItem[];
  value?: string;
  onChangeValue?: (value?: string) => void;
};

export default function RadioGroup(props: Props) {
  const { items, value, onChangeValue } = props;

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item.value}
          className="flex flex-row items-center cursor-pointer mb-2"
          onClick={() => onChangeValue && onChangeValue(item.value)}
        >
          <FaRegCircle
            style={{
              backgroundColor: value === item.value ? "black" : "white",
              borderRadius: "50%",
              marginRight: 8,
            }}
          />

          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
