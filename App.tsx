import { View, Text, StyleSheet } from "react-native";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

import { BustanMessanger } from "./src/navigation";

const App = () => {
  return (
    <Provider store={store}>
      <BustanMessanger />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
