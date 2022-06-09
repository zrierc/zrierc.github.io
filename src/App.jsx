import Navs from './components/Navs';
import Card from './components/Card';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Navs />

      <main className="nullish">
        <Introduction />

        <section
          id="projcts"
          className="py-16 md:py-32 border-b mx-auto flex justify-center items-center flex-col"
        >
          <h5 className="py-5 flex flex-col text-3xl md:text-4xl font-medium text-gray-900 text-center">
            Recent Projects
          </h5>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* Card */}
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;






































