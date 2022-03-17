import { useEffect } from "react";
import { onEnter } from "utils";

export default function useOnEnter() {
  useEffect(() => {
    document.addEventListener("keydown", onEnter, false);

    return () => {
      document.removeEventListener("keydown", onEnter, false);
    };
  }, []);

  return null;
}
