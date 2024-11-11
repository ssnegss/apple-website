import { FC } from "react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

const App: FC = () => {
   return (
      <main className="main">
         <Navbar />
         <Hero />
         <Highlights />
         <Model />
      </main>
   );
};

export default App;
