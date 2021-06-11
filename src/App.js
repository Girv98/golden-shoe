//import './sass/mystyles.scss';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <h2 className= "title is-2 has-color-primary">
          Hello World
        </h2>
      <section>        
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  );
}

export default App;
