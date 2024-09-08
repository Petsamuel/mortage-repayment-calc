import { useState } from "react";

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
              iconPosition === "front" &&
              "p-2 px-2 bg-[--Slate-100]  absolute top-0 inset-y-0   left-[0.2px] rounded-l-sm items-center"
            }
                ${
                  errors[name] ? "bg-red-600 text-white" : "ring-[--Slate-300]"
                } `}
          >
            <p className="flex items-center justify-center">
              {" "}
              {iconPosition === "front" && icon}
            </p>
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
                ? "p-2 px-4 bg-[--Slate-100] absolute right-0 inset-y-0 rounded-r-sm"
                : ""
            }
                ${
                  errors[name] ? "bg-red-600 text-white" : "ring-[--Slate-300]"
                } `}
          >
            <p className="flex items-center justify-center">
              {" "}
              {iconPosition === "back" && icon}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs font-semibold text-red-600 pt-1">
        {errors[name] && <span>This field is required</span>}
      </div>
    </div>
  );
};

export const RadioField = ({ register, errors, name }: InputFieldProps) => {
  const radioButton = ["Repayment", "Interest Only"];
  const [Radiobutton, setRadioButton] = useState("");

  return (
    <div className="text-[--Slate-500] font-medium">
      Mortgage Type
      {radioButton.map((val, key) => (
        <div
          key={key}
          className={`flex rounded-sm p-2 border border-[--Slate-700] hover:border-[--color-primary] my-2 cursor-pointer text-[--Slate-900] font-medium ${
            Radiobutton === val &&
            "bg-[--color-primary1] border border-[--color-primary]"
          }`}
          onClick={() => setRadioButton(val)}
        >
          <label htmlFor={val} className="mr-4 cursor-pointer w-full">
            <input
              type="radio"
              className="cursor-pointer mx-4 accent-[--color-primary] border-inherit border-2"
              {...register(name, { required: true })}
              checked={Radiobutton === val}
              onChange={() => {
                setRadioButton(val);
              }}
              id={val}
              value={Radiobutton}
            />
            {val}
          </label>
        </div>
      ))}
      <div className="text-xs font-semibold text-red-600 pt-1">
        {errors[name] && <span>This field is required</span>}
      </div>
    </div>
  );
};
