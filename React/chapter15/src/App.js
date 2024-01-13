import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [currentScreen, setCurrentScreen] = useState("users");
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${currentScreen}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setElements(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [currentScreen]);

  return (
    <div className="App">
      <main>
        <Buttons setCurrentScreen={setCurrentScreen} />
        <ul>
          {/* {elements.map((element) => (
            <li>{JSON.stringify(element)}</li>
          ))} */}

          <Table elements={elements} />
        </ul>
      </main>
    </div>
  );
}

export default App;
