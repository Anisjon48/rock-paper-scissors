import { Choose } from "./features/game/Choose";
import { Header } from "./components/Header";
import { Instruction } from "./components/Instructions";

import { HomePage } from "./pages/HomePage"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <>
    <Header />
    <Choose />
    <Instruction />
    </>
  );
}

export default App;
