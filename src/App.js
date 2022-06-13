import "./App.css";
import JsonDataContextProvider from "./context/JsonDataContext";
import ContextForm from "./component/ContextForm";

function App() {
  return (
    <JsonDataContextProvider>
      <ContextForm />
    </JsonDataContextProvider>
  );
}
export default App;
