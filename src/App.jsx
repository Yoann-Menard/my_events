import "./App.css";
import HomePage from "./components/HomePage";
// import ApiTest from "./components/ApiTest";
import { layoutGenerator } from 'react-break';

export default function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <ApiTest /> */}
    </div>
  );
}
