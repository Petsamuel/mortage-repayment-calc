interface InputFieldProps {
  type: string;
  label: string;
  iconPosition: "front" | "back";
  icon: string;
}

export const InputField = ({
  type,
  label,
  icon,
  iconPosition,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="mortgage" className="mb-4">
        {label}
      </label>
      <div className="flex ">
        <div className="p-2">{iconPosition === "front" && icon}</div>
        <input
          type={type}
          className="p-2 border border-[--slate--300] rounded-lg"
        />
        <div className="p-2">{iconPosition === "back" && icon}</div>
      </div>
    </div>
  );
};

export const RadioField = () => {
  return (
    <div className="mx-4">
      <label htmlFor="mortgage">
        Mortgage Type
        <div className="flex rounded-lg p-2 border my-2 cursor-pointer">
          <input
            type="radio"
            value="repayment"
            id="mortgage"
            className=" mx-4"
            name="mortgage"
          />
          Repayment
        </div>
        <div className="flex rounded-lg p-2 border cursor-pointer">
          <input
            type="radio"
            value="interest"
            id="mortgage"
            className="mx-4"
            name="mortgage"
          />
          Interest Only
        </div>
      </label>
    </div>
  );
};
