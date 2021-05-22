import { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { UsersContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const LoginScreen = ({ history, location }) => {
  const { loginUser, user } = useContext(UsersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    // if (Object.keys(user).length > 0) {
    //   history.push(redirect);
    // }
  }, [history, user, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };

    loginUser(loginuser);
  }

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "2fr",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 15,
          padding: "20px",
          margin: "10px",
          border: "1px solid black",
          backgroundColor: "white",
        }}
      >
        <FormGroup
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <h1 className="text-center">LOG IN</h1>
          <FiUser size={60} style={{ border: "2px solid teal" }} />
        </FormGroup>
        <Form.Control
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">LOGIN</Button>
        <p>
          New Here? <Link to="/register">SIGN UP</Link>
        </p>
      </Form>
    </div>
  );
};
export default LoginScreen;
// import { useState, useContext, useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
// import { UsersContext } from "../../UserContext";
// import { link } from "react-router-dom";
// import { FiUser } from "react-icons/fi";

// const LoginScreen = ({ history, location }) => {
//   const { loginUser, userInfo } = useContext(UsersContext);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const redirect = location.search ? location.search.split("=")[1] : "/";

//   useEffect(() => {
//     if (userInfo.token) {
//       history.push(redirect);
//     }
//   }, [userInfo, history, redirect]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const loginuser = {
//       username,
//       email,
//       password,
//     };
//     loginUser(loginuser);
//   }

//   return (
//     <div
//       style={{
//         height: "80vh",
//         width: "100%",
//         display: "grid",
//         gridTemplateColumns: "50%",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Form
//         onSubmit={handleSubmit}
//         style={{
//           display: "grid",
//           justifyContent: "center",
//           alignItems: "center",
//           gridTemplateColumns: "1fr",
//           gridGap: 20,
//           padding: "20px",
//           border: "1px solid white",
//         }}
//       >
//         <h1 className="text-center">LOG IN </h1>
//         {/* <Form.Control
//           placeholder="Enter Username"
//           value={username}
//           onChange={(text) => setUsername(text.target.value)}
//         /> */}
//         <Form.Control
//           placeholder="Enter  Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Form.Control
//           placeholder="Enter Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button type="submit">LOG IN</Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginScreen;
