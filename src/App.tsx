import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ul>
        <li>UL LI</li>
      </ul>
      <ol>
        <li>OL LI</li>
      </ol>
      <p>This is a paragraph.</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  );
}

export default App;
