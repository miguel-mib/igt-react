import { Provider } from "react-redux";
import { Routes } from "./routes";
import { store } from "./shared/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile } from "./shared/store/navbar-reducer";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    dispatch(setIsMobile({ isMobile }));
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
