import React, { ReactNode, useReducer } from "react";
import myContext from "./context";
import reducer, { initState } from "./reducer";

type Props = {
  children: ReactNode;
};
function Provider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <myContext.Provider value={[state, dispatch]}>
      {props.children}
    </myContext.Provider>
  );
}

export default Provider;
