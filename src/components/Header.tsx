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
      <p className="text-sm text-center text-[--slate-500]">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export const ResultText = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-3xl font-[--font1]">Your results</div>
      <p className="text-sm">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
    </div>
  );
};
