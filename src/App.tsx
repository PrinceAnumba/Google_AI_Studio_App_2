
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import InputBox from "./components/inputBox";
import Footer from "./components/footer";
import { Toaster } from "./components/ui/toaster";


function App() { 

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" relative">
        <Navbar />
        <Hero />
        <InputBox />
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
