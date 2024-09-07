import { Header, Text } from "./components/Header";
import { InputField, RadioField } from "./components/InputField";

import "./App.css";

function App() {
  return (
    <div className="mx-auto h-screen w-screen lg:flex justify-center">
      {/* main */}
      <main className="flex justify-center items-center w-[70dvw]">
        <form className="w-screen shadow-md rounded-xl bg-white">
          <div className="flex  justify-between flex-col lg:flex-row">
            <div className="  w-[40dvw] p-2">
              <div className="flex  justify-between">
                <Header />
                <div>
                  <button type="reset" className="underline cursor-pointer">
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
                    label="Mortgage amount"
                    iconPosition="front"
                    icon="£"
                  />
                </div>
                <div className="flex flex-col lg:flex-row">
                  <InputField
                    type="number"
                    label="Interest rate"
                    iconPosition="back"
                    icon="%"
                  />
                  <InputField
                    type="number"
                    label="Mortgage Term"
                    iconPosition="back"
                    icon="years"
                  />
                </div>
                <div>
                  <RadioField />
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
