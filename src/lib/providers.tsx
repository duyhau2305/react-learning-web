
import { Provider } from "react-redux";
// import { Next13ProgressBar } from "next13-progressbar";
/* Instruments */
import { store } from "./redux/store";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};
