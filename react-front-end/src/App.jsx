import './App.css'
import Sheep from './Sheep'
import Greeter from './Greeter';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Clicker2 from './Clicker2';
import Toggler from './Toggler';
import ToggleCounter from './ToggleCounter';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColerBoxGrid';

// const data = [
//   { id: 1, item: "eggs", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "chicken breasts", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 6, completed: true },
// ];

// const properties = [
//   {id: 129031, name: "Desert Yu", rating: 4.9, price: 150},
//   {id: 129031, name: "Lone Mountain Cabin", rating: 4.8, price: 250},
//   {id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300},
//   {id: 129033, name: "Redwood Treehouse Retreat", rating: 4.9, price: 120},
//   {id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140},
//   {id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96},
// ];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#DFFF00",
  "#6495ED",
  "#9FE2BF",
];

function App() {
  return ( 
    <div>
   {/* <ColorBox colors={colors}/> */}
   <ColorBoxGrid colors={colors}/>
    </div>
  );
}

export default App
