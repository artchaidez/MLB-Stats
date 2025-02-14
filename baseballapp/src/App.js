
import Awards from "./Awards";
import Layout from "./Layout";
import Leaders from "./Leaders"
import HofVoting from "./HofVoting";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";
 
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Awards/>} />
        <Route path="awards" >
          <Route index element={<Awards />} />
        </Route>
        <Route path="leaders" element={<Leaders/>} />
        <Route path="hof" element={<HofVoting/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  );
};

export default App;
