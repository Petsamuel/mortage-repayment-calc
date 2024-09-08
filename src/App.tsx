import { Header, Text } from "./components/Header";
import { InputField, RadioField } from "./components/InputField";
import { Button } from "./components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

interface InputFieldProps {
  name: string;
  message: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFieldProps>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onsubmit: SubmitHandler<InputFieldProps> = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="mx-auto h-screen w-screen lg:flex justify-center">
      {/* main */}
      <main className="flex justify-center items-center lg:w-[70dvw]">
        <form
          className="w-screen shadow-md rounded-xl bg-white "
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="flex  justify-between flex-col lg:flex-row ">
            <div className=" lg:w-[40dvw] p-2">
              <div className="flex  justify-between p-6">
                <Header />
                <div>
                  <button
                    type="reset"
                    className="text-[--Slate-500] font-light underline cursor-pointer"
                  >
                    {" "}
                    Clear all
                  </button>
                </div>
              </div>
              {/* input button */}

              <section className="p-4 flex-col flex gap-5">
                <div>
                  <InputField
                    type="number"
                    label="Mortgage Amount"
                    iconPosition="front"
                    icon="£"
                    register={register}
                    errors={errors}
                    name="Mortgage Amount"
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-4">
                  <InputField
                    type="number"
                    label="Mortgage Term"
                    iconPosition="back"
                    icon="years"
                    register={register}
                    errors={errors}
                    name="Mortgage Term"
                  />
                  <InputField
                    type="number"
                    label="Interest rate"
                    iconPosition="back"
                    icon="%"
                    register={register}
                    errors={errors}
                    name="Interest rate"
                  />
                </div>
                <div>
                  <RadioField register={register} errors={errors} />
                </div>

                <div className="flex w-full items-center justify-center">
                  <Button />
                </div>
              </section>
            </div>

            {/* div2 */}
            <div className="coloredbg p-4 rounded-r-xl lg:rounded-bl-[5rem]">
              <div className="justify-center flex mx-auto my-[2em] p-5">
                <Text />
              </div>
            </div>
          </div>

          {/* event */}
        </form>
      </main>
    </div>
  );
}

export default App;
