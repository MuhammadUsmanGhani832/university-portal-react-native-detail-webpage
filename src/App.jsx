import './App.css';
import { GoDotFill } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function App() {

  return (
    <div className="portal__container">
      <div className="detail">
        <div className="title">Online Portal for University Students</div>
        <div className="tools">
          <span className="year">2023</span>
          <span className="languages">
            <span className="icon">
              <GoDotFill />
            </span>
            <span>React Native</span>
          </span>
          <span className="languages">
            <span className="icon">
              <GoDotFill />
            </span>
            <span>Node js</span>
          </span>
          <span className="languages">
            <span className="icon">
              <GoDotFill />
            </span>
            <span>Express js</span>
          </span>
          <span className="languages">
            <span className="icon">
              <GoDotFill />
            </span>
            <span>MongoDB</span>
          </span>
          <span className="languages">
            <span className="icon">
              <GoDotFill />
            </span>
            <span>Ngrok</span>
          </span>
        </div>
        <p>Amet minim</p>
        <div className="web_image">
          <img
            src="/images/flashpage.png"
            alt=""
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "gray",
            }}
          />
        </div>
        <h1>Sign in and Sign up</h1>
        {/* mobile image */}
        <div className="mobile_image">
          <img
            src="/ss.jpeg"
            alt=""
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "gray",
            }}
          />
          <img
            src="/images/flashpage.png"
            alt=""
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "gray",
            }}
          />
        </div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </div>
      <div className="footer">
        <div className="media">
          <span
            onClick={() =>
              window.open(
                "https://www.instagram.com/muhammadusman1351/",
                "_blank"
              )
            }
          >
            <AiFillInstagram size={24} />
          </span>
          <span
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/muhammad-usman-profile121/",
                "_blank"
              )
            }
          >
            <BiLogoLinkedin size={24} />
          </span>
          <span
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100041245301416",
                "_blank"
              )
            }
          >
            <BsFacebook size={24} />
          </span>
          <span
            onClick={() =>
              window.open("https://github.com/MuhammadUsmanGhani832", "_blank")
            }
          >
            <BsGithub size={24} />
          </span>
        </div>
        <p>Copyright ©2024 Muhammad Usman </p>
      </div>
    </div>
  );
}

export default App







// import './App.css';
// import { GoDotFill } from "react-icons/go";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
// import { BiLogoLinkedin } from "react-icons/bi";
// import { BsGithub } from "react-icons/bs";

// function App() {

//   return (
//     <div className="portal__container">
//       <div className="detail">
//         <div className="title">Designing Dashboards with usability in mind</div>
//         <div className="tools">
//           <span className="year">2020</span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>React</span>
//           </span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>React</span>
//           </span>
//         </div>
//         <p>
//           Amet minim
//         </p>
//         <div className="web_image">
//           <img src="/Rectangle 4.png" alt="" />
//         </div>
//         <div className="mobile_image">
//           <img src="/ss.jpeg" alt="" />
//           <img src="/ss.jpeg" alt="" />
//         </div>
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//       </div>
//       <div className="footer">
//         <div className="media">
//           <span
//             onClick={() =>
//               window.open(
//                 "https://www.instagram.com/muhammadusman1351/",
//                 "_blank"
//               )
//             }
//           >
//             <AiFillInstagram size={24} />
//           </span>
//           <span
//             onClick={() =>
//               window.open(
//                 "https://www.linkedin.com/in/muhammad-usman-profile121/",
//                 "_blank"
//               )
//             }
//           >
//             <BiLogoLinkedin size={24} />
//           </span>
//           <span
//             onClick={() =>
//               window.open(
//                 "https://www.facebook.com/profile.php?id=100041245301416",
//                 "_blank"
//               )
//             }
//           >
//             <BsFacebook size={24} />
//           </span>
//           <span
//             onClick={() =>
//               window.open("https://github.com/MuhammadUsmanGhani832", "_blank")
//             }
//           >
//             <BsGithub size={24} />
//           </span>
//         </div>
//         <p>Copyright ©2024 Muhammad Usman </p>
//       </div>
//     </div>
//   );
// }

// export default App
