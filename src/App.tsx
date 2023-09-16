import { Provider } from "react-redux";
import { Routes } from "./routes";
import { store } from "./shared/store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
