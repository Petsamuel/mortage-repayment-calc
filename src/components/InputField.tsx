interface InputFieldProps {
  type?: string;
  label?: string;
  iconPosition?: "front" | "back";
  icon?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
}

export const InputField = ({
  type,
  label,
  icon,
  iconPosition,
  register,
  name,
  errors,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="mortgage" className="mb-4 text-[--Slate-500] font-medium">
        {label}
      </label>
      <div className="relative">
        <div className="flex">
          <div
            className={`${
              iconPosition === "front"
                ? "p-2 bg-[--Slate-100]  absolute top-0 inset-y-0   left-[0.5px] rounded-l-sm items-center"
                : ""
            }
                ${
                  errors[name] ? "bg-red-600 text-white" : "ring-[--Slate-300]"
                } `}
          >
            {iconPosition === "front" && icon}
          </div>
          <input
            type={type}
            className={`p-2 rounded-sm w-full outline-[--Slate-300] ring-[--Slate-300] ring-2 hover:ring4  ${
              iconPosition === "front" ? "pl-[2rem] py-3" : "pr-[2rem]"
            }
            ${
              errors[name]
                ? "ring-red-600 outline-red-600 "
                : "ring-[--Slate-300]"
            }  
            `}
            {...register(name, { required: true })}
          />

          <div
            className={`${
              iconPosition === "back"
                ? "p-2 bg-[--Slate-100] absolute right-0 inset-y-0 rounded-r-sm"
                : ""
            }
                ${
                  errors[name] ? "bg-red-600 text-white" : "ring-[--Slate-300]"
                } `}
          >
            {iconPosition === "back" && icon}
          </div>
        </div>
      </div>
      <div className="text-xs font-semibold text-red-600 pt-1">
        {errors[name] && <span>This field is required</span>}
      </div>
    </div>
  );
};

export const RadioField = ({ register, errors }: InputFieldProps) => {
  const radioButton = ["Repayment", "Interest Only"];
  return (
    <div className="text-[--Slate-500] font-medium">
      Mortgage Type
      <label htmlFor="mortgage">
        {radioButton.map((val, key) => (
          <div
            key={key}
            className="flex rounded-sm p-2 border border-[--Slate-700] hover:border-[--color-primary] my-2 cursor-pointer text-[--Slate-900] font-medium"
            onClick={() => null}
          >
            <input
              type="radio"
              value={val}
              className="mx-4 accent-[--color-primary]"
              {...register("mortgage", { required: true })}
            />
            {val}
          </div>
        ))}
      </label>
      <div className="text-xs font-semibold text-red-600 pt-1">
        {errors.mortgage && <span>This field is required</span>}
      </div>
    </div>
  );
};
