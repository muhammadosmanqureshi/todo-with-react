import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  // const [count,setcount] = useState(0)
  const [arr,setArr] = useState(["abcd","efghi"]);
  const [Text, setText] = useState("");

const [items, setItems] = useState(["1","2","3","4","5","6","7","8"]);


const handleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };
  
  let add =() => {
arr.push(Text);
    // arr.push("dummy String") 
    
    console.log(arr);
    setArr([...arr]);
  }
     
  // let add =() => {
  //   setcount(count+1)
  // }
  


  
  
  


     
  

// // let a = 10;
// // let arr = [1,2,3,4,5,6,7,8,9,]

// let mobile = [
//   {
//     name: "a30",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 2000,
//     brand: "samsung",
//   },
//   {
//     name: "note10",
//     ram: "6gb",
//     rom: "128gb",
//     camera: "50px",
//     price: 4000,
//     brand: "samsung",
//   },
//   {
//     name: "s10",
//     ram: "3gb",
//     rom: "128gb",
//     camera: "10px",
//     price: 5000,
//     brand: "samsung",
//   },
//   {
//     name: "iphone4",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "iphone",
//   },
//   {
//     name: "iphone4s",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 20000,
//     brand: "iphone",
//   },
//   {
//     name: "iphone5",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 30000,
//     brand: "iphone",
//   },
//   {
//     name: "iphone6",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 30000,
//     brand: "iphone",
//   },
//   {
//     name: "redminote10",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "redminote11",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "redmi10",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "redmi10pro",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "a3s",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "oppo",
//   },
//   {
//     name: "a3s",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "Realmi",
    
//   },
// ]


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="ENTER Text"
        ></input>
        {arr.map((x, i) => (
          <p>{x}</p>
        ))}

        {/* <p>{arr}</p> */}
        <p>{Text}</p>
<button onClick={add}>add</button>



    <ul>
      {items.map((item, index) => (
        <li key={item}>
          {item}
          <button type="button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  



{/*


  

{mobile.map((x,i) =>{
 
 
 return(
<div className='card'>

<h3>{x.brand}</h3>
<p>{x.name}</p>
<p>RS{x.price}/- </p>

  </div>


 )


})} */}

      </header>
    </div>
  );
}

export default App;



