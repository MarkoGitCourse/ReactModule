import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UseStateDemo from './pages/UseStateDemo';
import UseEffectDemo from "./pages/UseEffectDemo";
import UseContextDemo from "./pages/UseContextDemo";
import UseRefDemo from "./pages/UseRefDemo";
import UseCallbackDemo from "./pages/UseCallbackDemo";
import UseMemoDemo from "./pages/UseMemoDemo";
import CustomHookDemo from "./pages/CustomHooksDemo";

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UseStateDemo />} />
        <Route path="/use-effect" element={<UseEffectDemo />} />
        <Route path="/use-context" element={<UseContextDemo />} />
        <Route path="/use-ref" element={<UseRefDemo />} />
        <Route path="/use-callback" element={<UseCallbackDemo />} />
        <Route path="/use-memo" element={<UseMemoDemo />} />
        <Route path="/custom-hook" element={<CustomHookDemo />} />
      </Route>
    </Routes>
  );
}

export default App;
