import RoutesApp from './routes';

import Nav from './components/Nav/Nav';

function App() {


  return (
    <div className="container">
      <div className="content">
      <Nav/>
        <main >
          <div className="img-container">
             <RoutesApp/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;

