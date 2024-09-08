import img from "../assets/images/illustration-empty.svg";

export const Header = () => {
  return <div className=" text-xl font-bold">Mortgage Calculator</div>;
};

export const Text = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <div>
        <img src={img} alt="empty" />
      </div>
      <h2 className="text-3xl font-[--font1]">Results shown here</h2>
      <p className="text-sm text-center text-[--Slate-500]">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ResultText = ({ result }: any) => {
  return (
    <div className="flex lg:items-start items-center justify-center flex-col px-4 gap-3">
      <div className="text-xl font-[--font1]">Your results</div>
      <p className="text-sm  text-[--Slate-300] text-center lg:text-start">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="border-t-4 rounded-md border-[--color-primary] flex flex-col gap-4 mt-4 p-4 bg-[--Slate1-900] w-full">
        <p> Your monthly repayments</p>
        <p className="text-4xl text-[--color-primary] font-bold">
          £{result?.monthlyPayment.toLocaleString()}
        </p>
        <hr className="my-5 space-y-7 text-gray-500" />
        <p className=" text-[--Slate-300]">Total you'll repay over the term</p>
        <p className="text-2xl">£{result?.totalRepay.toLocaleString()}</p>
      </div>
    </div>
  );
};
