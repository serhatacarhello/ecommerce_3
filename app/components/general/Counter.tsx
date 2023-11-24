interface CounterProps {
  cardProduct: any;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}
const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle =
    "inline-flex justify-center items-center transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-lg w-9 h-9 text-center  p-2";
  return (
    <div className="flex justify-center items-center gap-3  my-3 text-xl md:text-2xl">
      <div className={buttonStyle} onClick={increaseFunc}>
        -
      </div>
      <div>{cardProduct.quantity}</div>
      <div className={buttonStyle} onClick={decreaseFunc}>
        +
      </div>
    </div>
  );
};

export default Counter;
