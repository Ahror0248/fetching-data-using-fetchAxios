// import React, { useState } from "react";

// const Fetch = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     await fetch("https://api.icndb.com/jokes/random/5")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data.type);
//         setData(data.value);
//       });
//   };

//   return (
//     <div>
//       <button onClick={getData}>fetch</button>
//       {data.map((value) => {
//         return <h1 key={value.id}>{value.joke} </h1>;
//       })}
//     </div>
//   );
// };

// export default Fetch;
