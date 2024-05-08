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
        <div className="title">Online Portal for University Students </div>
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
        <h1>Detail</h1>
        <p>Designed and developed a comprehensive university portal app using React Native, catering to administrators, teachers, and students.
        </p>
        <div className="web_image">
          <img
            src="/images/flashpage.png"
            alt=""
          />
        </div>
        <h1>Sign in and Sign up</h1>
        <p>Implemented secure logins, user-specific dashboards, and streamlined features for student, teacher and admin, course enrollment, attendance tracking, and event coordination.
        </p>
        {/* mobile image */}
        <div className="mobile_image">
          <img
            src="/images/login.jpg"
            alt=""
          />
          <img
            src="/images/admin login.jpg"
            alt=""
          />
          <img
            src="/images/admin dashboard.jpg"
            alt=""
          />
          <img
            src="/images/course list.jpg"
            alt=""
          />
          <img
            src="/images/add course.jpg"
            alt=""
          />
          <img
            src="/images/events.jpg"
            alt=""
          />
          <img
            src="/images/create event.jpg"
            alt=""
          />
        </div>
        <h1>Features</h1>
        <p>Transcript viewing, semester-wise subject&#39;s mid-term, final exams, quiz, or assignment marks for individuals.
        </p>
        <div className="mobile_image">
          <img src="/images/transcript.jpg" alt="" />
          <img src="/images/result course list.jpg" alt="" />
          <img src="/images/result.jpg" alt="" />
        </div>
        <h2></h2>
        <p>Created an intuitive interface for efficient navigation and data management, enhancing overall university experience.</p>
        <div className="mobile_image">
          <img src="/images/1.jpg" alt="" />
          <img src="/images/2.jpg" alt="" />
          <img src="/images/3.jpg" alt="" />
        </div>
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
        <p style={{ marginTop: 10, fontSize: 12, color: 'gray' }}>Copyright ©2024 Muhammad Usman </p>
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
//         <div className="title">Online Portal for University Students </div>
//         <div className="tools">
//           <span className="year">2023</span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>React Native</span>
//           </span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>Node js</span>
//           </span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>Express js</span>
//           </span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>MongoDB</span>
//           </span>
//           <span className="languages">
//             <span className="icon">
//               <GoDotFill />
//             </span>
//             <span>Ngrok</span>
//           </span>
//         </div>
//         <h1>Detail</h1>
//         <p>Designed and developed a comprehensive university portal app using React Native, catering to administrators, teachers, and students.
//         </p>
//         <div className="web_image">
//           <img
//             src="/images/flashpage.png"
//             alt=""
//           />
//         </div>
//         <h1>Sign in and Sign up</h1>
//         <p>Implemented secure logins, user-specific dashboards, and streamlined features for student, teacher and admin, course enrollment, attendance tracking, and event coordination.
//         </p>
//         {/* mobile image */}
//         <div className="mobile_image">
//           <img
//             src="/public/images/login.jpg"
//             alt=""
//           />
//           <img
//             src="/public/images/admin login.jpg"
//             alt=""
//           />
//           <img
//             src="/public/images/admin dashboard.jpg"
//             alt=""
//           />
//           <img
//             src="/public/images/course list.jpg"
//             alt=""
//           />
//           <img
//             src="/public/images/add course.jpg"
//             alt=""
//           />
//           <img
//             src="/public/images/events.jpg"
//             alt=""
//           />
//           <img
//             src="/public/images/create event.jpg"
//             alt=""
//           />
//         </div>
//         <h1>Features</h1>
//         <p>Transcript viewing, semester-wise subject&#39;s mid-term, final exams, quiz, or assignment marks for individuals.
//         </p>
//         <div className="mobile_image">
//           <img src="/public/images/transcript.jpg" alt="" />
//           <img src="/public/images/result course list.jpg" alt="" />
//           <img src="/public/images/result.jpg" alt="" />
//         </div>
//         <h2></h2>
//         <p>Created an intuitive interface for efficient navigation and data management, enhancing overall university experience.</p>
//         <div className="mobile_image">
//           <img src="/public/images/1.jpg" alt="" />
//           <img src="/public/images/2.jpg" alt="" />
//           <img src="/public/images/3.jpg" alt="" />
//         </div>
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
//         <p style={{ marginTop: 10, fontSize: 12, color: 'gray' }}>Copyright ©2024 Muhammad Usman </p>
//       </div>
//     </div>
//   );
// }

// export default App


