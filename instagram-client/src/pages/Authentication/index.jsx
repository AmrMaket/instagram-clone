// import React, { useState } from "react";
// import "./style.css";
// import Login from "../Login/index";
// import SignupForm from "../Signup/index";

// function Authenticate() {
//   const [active, setActive] = useState("login");

//   const handleChange = () => {
//     setActive(active === "login" ? "signup" : "login");
//   };

//   return (
//     <div className="authenticate">
//       <div className="auth__left">
//         <img
//           src="https://i.imgur.com/P3Vm1Kq.png"
//           alt="Instagram Screenshots"
//         />
//       </div>
//       <div className="auth__right">
//         {active === "login" ? <Login /> : <SignupForm />}

//         <div className="auth__more">
//           <span>
//             {active === "login" ? (
//               <>
//                 Don't have an account?{" "}
//                 <button onClick={handleChange}>Sign Up</button>
//               </>
//             ) : (
//               <>
//                 Have an account? <button onClick={handleChange}>Log in</button>
//               </>
//             )}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Authenticate;