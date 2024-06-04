import {
  BackgroundHeading,
  Footer,
  Header,
  ItemsList,
  Sidebar,
} from "./components";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemsList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
