import { useEffect, useState } from "react";

const commonFruits = [
  "🍎 apple",
  "🍌 banana",
  "🍒 cherry",
  "🍈 date",
  "🥭 mango",
  "🍇 grape",
  "🥝 honeydew",
  "🥥 coconut",
  "🍋 kiwi",
  "🍊 lemon",
  "🍉 warter melon",
  "🍊 orange",
  "🍑 peach",
];

const Fruitlist = () => {
  const [fruit, setFruit] = useState([]);

  const addFruit = () => {
    console.log("asdasdsadasd");
    const newFruit =
      commonFruits[Math.floor(Math.random() * commonFruits.length)];
    setFruit([...fruit, newFruit]);
  };
  return (
    <div>
      <h3>Fruit List</h3>
      <ul>
        {commonFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  // monitor the re-render state
  useEffect(() => {
    console.log("Component rendered or rerendered");
  });

  const handleIncrement = () => {
    // setCount(count+1);
    // setCount(count+2)
    // setCount(count+3)

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 2);
    setCount((prevCount) => prevCount + 3);
    console.log(count);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Current Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <Fruitlist />
      <br />
      <Person />
      <br />
      <Theme />
    </div>
  );
}

export default Counter;

const Person = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 20,
  });

  const handleIncrement = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleIncrement}>Increment Age</button>
    </div>
  );
};

function getTheme() {
  console.log("Getting the theme from the local storage");
  return localStorage.getItem("theme") || "light";
}

const Theme = () => {
  const [theme, setTheme] = useState(getTheme());
  const handleClick = () => {
    console.log("Changing the theme");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={handleClick}>Swich Theme</button>
    </div>
  );
};
