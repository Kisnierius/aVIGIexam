
// import React, { useState } from "react";
// import loginImg from "../../login.svg";
// import { AuthContext } from "../../contexts/auth.js"

//   const Register = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPaswword] = useState('');
//     const authContext = useContext(AuthContext)

//     const onClickHandler = (event) => {
//       event.preventDefault();

//       let newUser = {
//         email: email,
//         password: password
//       };

//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify(newUser),
//       };

//       fetch('http://localhost:3000/register', options)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.msg !== "success" || !data.token) {
//             return alert("error");
//           }

//           authContext.setToken(data.token);
//           alert("Success");
//         })
//         .catch((err) => alert(err.message))
//         .finally(() => e.target.reset());
//     };



//     return (

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onClickHandler
//         }}>

//             <div className="base-container" ref={this.props.containerRef}>
//               <div className="header">Register</div>
//               <div className="content">
//                 <div className="image">
//                   <img src={loginImg} />
//                 </div>
//                 <div className="form">
//                   <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input type="text" name="email" placeholder="email" onChange={(e) =>
//                       setEmail(e.target.value)}
//                       required />

//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="text" name="password" placeholder="password" onChange={(e) =>
//                       setPaswword(e.target.value)
//                     }
//                       required />
//                   </div>
//                 </div>
//               </div>
//               <div className="footer">
//                 <button type="submit" className="btn">
//                   Register
//                 </button>
//               </div>
//             </div>
        
//         </form>
//     )
//  } 

// export default Register;