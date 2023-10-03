// import React, { useState } from 'react';
// import axios from 'axios';

// function PostData() {
//   // Define a state variable to hold the JSON data
//   const [formData, setFormData] = useState({
//     // sphere: '',
//     // cylinder: '',
//     // axis: ''
//   });

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setFormData({
//       ...formData,
//       sphere: sphere,
//       cylinder: cylinder,
//       axis: axis
//     });
//   };

//   // Function to handle the POST request
//   const sendDataToServer = () => {
//     console.log('Sending JSON data:', formData);
//     const apiUrl = 'http://localhost:8000/api'; // Remove the extra double quotes

//     // Make a POST request using Axios
//     axios
//       .post(apiUrl, formData, {
//         headers: {
//           'Content-Type': 'application/json', // Set the content type to JSON
//         },
//       })
//       .then((response) => {
//         // Handle the response data here
//         console.log('Response from server:', response.data);
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error('There was a problem with the Axios request:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Send JSON Data to Server</h2>
//       {/* <button onClick={sendDataToServer}>Send JSON</button> */}
//       <form onSubmit={sendDataToServer}>
//         <p> 
//           <label>Sphere</label>
//           <input type='text' value={formData.sphere} onChange={handleInputChange}/>
//         </p>        
//         <p>
//           <label>Cylinder</label>
//           <input type='text' value={formData.cylinder} onChange={handleInputChange}/>
//         </p>        
//         <p>
//           <label>Axis</label>
//           <input type='text' value={formData.axis} onChange={handleInputChange}/>
//         </p>
//         <button>Send</button>
//       </form>

//     </div>
//   );
// }

// export default PostData;
