import { useEffect, useRef } from "react";

function useOutsideClick(handler, listeningCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener(
        "click",
        handleClickOutside,
        listeningCapturing
      );

      return () =>
        document.removeEventListener(
          "click",
          handleClickOutside,
          listeningCapturing
        );
    },
    [handler, listeningCapturing]
  );
  return ref;
}

export default useOutsideClick;
