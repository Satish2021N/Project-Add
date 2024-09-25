// eslint-disable-next-line react/prop-types
const Button = ({ children, clearButton, ...props }) => {
  let classes = "bg-stone-900 px-4 py-1.5 rounded-sm text-stone-100";

  let clear = "bg-red-500 px-4 py-1 rounded-sm text-stone-100"
  return (
    <>
      <button  className={clearButton? clear: classes} {...props}>{children}</button>
    </>
  );
};

export default Button;
