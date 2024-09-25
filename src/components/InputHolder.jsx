import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const InputHolder = forwardRef(({ label, textarea, type }, ref) => {
  const classes =
    "p-2 border-stone-600 border-b-2 bg-stone-400 text-stone-100 focus:outline-none focus:border-stone-600 w-2/3";
  return (
    <>
      <label htmlFor="" className="text-l  font-semibold">
        {label}
      </label>
      {!textarea ? (
        <input type={type} className={classes} ref={ref} />
      ) : (
        <textarea className={classes} ref={ref}></textarea>
      )}
    </>
  );
});

export default InputHolder;
