import Header from "components/core/Header";
import useOnEnter from "hooks/useOnEnter";
import RoutesWrapper from "Routes/RoutesWrapper";

export default function App() {
  useOnEnter();

  return (
    <>
      <Header />

      {RoutesWrapper()}
    </>
  );
}
