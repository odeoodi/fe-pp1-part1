import "./App.css";
import IdCard from './IdCard.jsx'

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName='Jones'
        firstName='Alex'
        gender='non-binary'
        height={165}
        birth={new Date("1998-07-14")}
        picture="https://randomuser.me/api/portraits/women/5.jpg"
      />
      <IdCard
        lastName='Smith'
        firstName='Jake'
        gender='male'
        height={185}
        birth={new Date("1995-03-17")}
        picture="https://randomuser.me/api/portraits/men/9.jpg"
      />
    </div>
  );
}

export default App;
