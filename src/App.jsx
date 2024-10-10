import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./sections/About";
import Articles from "./sections/Articles";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
