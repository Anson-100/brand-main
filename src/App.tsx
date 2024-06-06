// App.tsx
import { useState } from "react";

import Navbar from "@/scenes/Navbar";
import ControlPanel from "@/scenes/ControlPanel";
import Footer from "@/scenes/Footer";

import { SelectedPage } from "./shared/types";
import { ThemeProvider } from "@/components/ThemeContext";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Landing,
  );

  return (
    <ThemeProvider>
      <div className="app bg-zinc-950 h-full">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {/* <Landing scrollProgress={scrollProgress} />
        <Message /> */}
        <ControlPanel />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
