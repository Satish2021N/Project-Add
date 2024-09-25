/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const Modal = forwardRef(function ({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <>
      <dialog
        ref={dialog}
        className="backdrop:bg-stone-600/90 rounded-xl shadow-md px-4 py-4"
      >
        {children}
        <form action="" method="submit">
          <Button>Close</Button>
        </form>
      </dialog>
    </>
  );
});

export default Modal;
