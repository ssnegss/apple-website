import { FC } from "react";
import * as Sentry from "@sentry/react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";

const App: FC = () => {
   return (
      <main className="main">
         <Navbar />
         <Hero />
         <Highlights />
         <Model />
         <Features />
      </main>
   );
};

export default Sentry.withProfiler(App);
