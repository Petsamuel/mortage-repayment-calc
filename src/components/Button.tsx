import cal from "../assets/images/icon-calculator.svg";

export const Button = () => {
  return (
    <div>
      <div>
        <button
          type="submit"
          className="rounded-lg bg-[--color-primary] flex p-2"
        >
          <img src={cal} alt="calc" />
          Calculate Repayments
        </button>
      </div>
    </div>
  );
};
