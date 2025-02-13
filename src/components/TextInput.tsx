type Props = {
  className?: string;
  value?: string;
  onChangeInput?: (value: string) => void;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
};

export default function TextInput(props: Props) {
  const {
    className,
    value,
    onChangeInput,
    placeholder,
    isError,
    errorMessage,
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <input
        className={`flex flex-row items-center py-2 px-3 border rounded mb-1 ${
          isError ? "border-red-500" : "border-gray-300"
        } `}
        value={value}
        onChange={(e) => {
          onChangeInput && onChangeInput(e.target.value);
        }}
        placeholder={placeholder}
      />

      {isError && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
