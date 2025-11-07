import "./App.css";
import Landing_page from "./Components/Home/Landing_page";
import Navbar from "./Components/Navbar/Navbar";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Merch from "./Components/MERCH/Merch";
import UserContext from "./Context/UserContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import Accomodation from "./Components/Accomodation/Accomo";
import { useContext } from "react";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/Modal";
import Toast from "./Components/Toast/Toast";
import ModalLogout from "./SignOut";
import axios from "axios";
import Each_event from "./Components/Each_Event/Each_event";
import Modal2 from "./Components/Login copy/components/Modal.js";
import Events_Main from "./Components/Event_Main/Events_Main";
import Each_event_about from "./Components/Each_Event/Each_event_about";
import Home from "./Components/Home/Home";
import ReportIssue from "./Components/ReportIusse/ReportIssue";
import React, { useEffect, useState } from "react";
import landingPage from "./Images/landing-page-1.png";
import landingPage1 from "./Images/landing-page-2.png";
import buttonpng from "./Images/button.png";
import buttonpng1 from "./Images/button-frame.png";
import SFlogo from "./Components/Home/Images/sfilu.png";
import SF_logo from "./Components/Home/Images/SF logo.png";
import kgp_logo from "./Components/Home/Images/kgp_logo.png";
import Gallery1 from "./Components/Gallery/Gallery1";
import Game from "./Components/Game/Game.tsx";
import FAQ from "./Components/FAQ/FAQ";
import Comingsoon from "./Components/Comingsoon/comingsoon";
import gameBackground from "./Components/Game/Images/game_background.png";
import Accommodation from "./Components/Dashboard/Accommodation";
import Acco from "./Components/AccomodationNew/Acco";
import Schedule from "./Components/Schedule/Schedule";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ScheduleNew from "./Components/Schedule/Schedule_new";
import schedulebackground from "./Components/Schedule/sch_bg_final.png";

function App() {
  let navigate = useNavigate();
  const stylecss = `
  .first_display_game_page{
  background: url(${gameBackground}) no-repeat center;
	background-size: 100% 100%;}
  #game{
  background: url(${gameBackground}) no-repeat center;
		background-size: 100% 100%;}
  .Event_main-container{
    padding-bottom: 110px;
    background: url(${landingPage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}
.accoContainer1{
  background: url(${landingPage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
  min-height:100vh;
}
.reportissue-fullpage{
  background: url(${landingPage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}

.profile-fullpage
{
  background: url(${landingPage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}
.regEveprofile-outermost {
  background: url(${landingPage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.Dashboardcontainer{
    background: url(${landingPage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;}
.each-event-about-container{
      background: url(${landingPage1});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    }

.preloader-body{
  background-color: black; 
  background: url(${landingPage1});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: rgba(0, 0, 0, 0.60);
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 90%;
}
  .Route_Animation {
    font-family: sans-serif;
    text-align: center;
    position: relative;
    /* background: url(./images/each-event-background.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%; */
    overflow-x: hidden;
    background: url(${landingPage1});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
  }
  .items {
    /* clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 100% 50%, 80% 100%, 20% 100%, 0 50%, 0 50%); */
    /* height: 90px; */
    /* overflow: hidden; */
    background: url(${buttonpng1});
    /* background-repeat: no-repeat; */
    background-size:100%;
  background-repeat:no-repeat;
  background-position:center center;}
  .landing-page{
    background: url(${landingPage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #0F3460;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;}
    .button-landingpage {
      background-image: url(${buttonpng});
  background-repeat: no-repeat;
  background-size:contain;
  background-position: center center;}
    .button-acco {
      background-image: url(${buttonpng});
  background-repeat: no-repeat;
  background-size:contain;
  background-position: center center;}
  .Event_main-container{
    background: url(${landingPage1});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
  }
  .SCheduleouterCOntainer{
    background: url(${schedulebackground});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #0F3460;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;
  }
  
  `;
  const [Group_Event_Registration_Modal, setGroup_Event_Registration_Modal] =
    useState(false);
  const ShowGroup_Event_Registration_Modal = () => {
    setGroup_Event_Registration_Modal(true);
  };
  //login-signup
  const [loginSignup, setLoginSignup] = useState(false);
  const toggleLoginModal = () => {
    setLoginSignup(!loginSignup);
  };
  const log = () => {
    // alert(1);
    toggleLoginModal();
  };
  const [ModalLandingPage, setModalLandingPage] = useState(false);
  const [preview, setPreview] = useState(false);
  const usercontext = useContext(UserContext);
  const {
    setuser,
    setUserToken,
    userToken,
    Isloggedin,
    group,
    solo,
    setIsloggedin,
    setGroup,
    setSolo,
  } = usercontext;
  const [eveToast, setEveToast] = useState(false);

  // const showModalLandingPage = () => {
  //   setModalLandingPage(!ModalLandingPage);
  // };
  // const change_logout_decision = () => {
  //   setuser();
  //   setUserToken("");
  //   showModalLandingPage();
  //   navigate("/");
  //   showToast(true, "You are Successfully Logged Out ", "Success");
  // };

  //toast

  function getRegisteredEvents() {
    // if(Isloggedin){
    axios
      .post(
        "http://ec2-13-233-112-22.ap-south-1.compute.amazonaws.com/api/user/get_registered_events",
        {
          token: userToken,
          // token: "sdf",
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.code == 0) {
          setSolo(response.data.message.solo);
          setGroup(response.data.message.group);
          setEveToast(false);
          // alert("1ste");
          console.log(response);
        } else {
          setEveToast(true);
          // showToast(true, "Please Logout and Login Again", "Unsuccessful");
          // navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("hell");
      });
    // }
  }
  useEffect(() => {
    if (Isloggedin) {
      getRegisteredEvents();
    }
    try {
      const data = sessionStorage.getItem("user");
      const newdata = JSON.parse(data);
      setuser(newdata.data);
      setUserToken(newdata.token);
      setIsloggedin(true);
    } catch (error) {}
  }, []);
  const closeModal = () => {
    setGroup_Event_Registration_Modal(false);
  };
  const [toast, setToast] = useState({
    istrue: false,
    message: "",
    type: "",
  });
  function showToast(ist, msg, type) {
    setToast({
      istrue: false,
      message: "",
      type: "",
    });
    setTimeout(() => {
      setToast({
        istrue: ist,
        message: msg,
        type: type,
      });
    }, 10);
    const mytimeout = setTimeout(() => {
      setToast({
        istrue: false,
        message: "",
        type: "",
      });
    }, 5000);
    return () => {
      clearTimeout(mytimeout);
    };
  }
  const [eventClicked, setEventClicked] = useState("");
  const [event, setEvent] = useState([]);
  const handleEventClicking = (program) => {
    setEventClicked(program);
  };
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-13-233-112-22.ap-south-1.compute.amazonaws.com/api/event/get_all_event_details"
      )
      .then((res) => {
        setdata(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <style>{stylecss}</style>
      <Navbar showToast={showToast} />
      {toast.istrue && <Toast toast={toast} setToast={setToast} />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Landing_page
              kgp_logo={kgp_logo}
              SF_logo={SF_logo}
              SFlogo={SFlogo}
              log={log}
            />
          }
        />
        <Route exact path="/Gallery" element={<Gallery1 />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              showToast={showToast}
              getRegisteredEvents={getRegisteredEvents}
              eveToast={eveToast}
            />
          }
        />
        <Route
          exact
          path="/dashboard/registered-events"
          element={
            <Home
              getRegisteredEvents={getRegisteredEvents}
              eveToast={eveToast}
              showToast={showToast}
            />
          }
        />
        <Route exact path="/dashboard/profile" element={<Profile />} />
        <Route
          exact
          path="/dashboard/accomodation"
          element={<Accommodation />}
        />
        <Route
          exact
          path="/dashboard/reportissues"
          element={<ReportIssue showToast={showToast} />}
        />
        <Route
          exact
          path="/dashboard/changepassword"
          element={<ChangePassword showToast={showToast} />}
        />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/FAQ" element={<FAQ />} />

        <Route
          exact
          path="/accomodation"
          element={<Acco showToast={showToast} />}
        />
        <Route
          exact
          path="/Events_Main"
          element={<Events_Main showToast={showToast} data={data} />}
        />
        <Route
          exact
          path="/Events_Main/Each_event/:cat"
          element={
            <Each_event
              EventClicking={handleEventClicking}
              setEvent={setEvent}
              data={data}
              event={event}
              showToast={showToast}
              ShowGroup_Event_Registration_Modal={
                ShowGroup_Event_Registration_Modal
              }
              Group_Event_Registration_Modal={Group_Event_Registration_Modal}
              closeModal={closeModal}
            />
          }
        />
        <Route
          exact
          path="/Events_Main/Each_event/:cat/About/:eve"
          element={
            <Each_event_about
              name={eventClicked}
              data={data}
              event={event}
              setEvent={setEvent}
              showToast={showToast}
            />
          }
        />
        <Route exact path="/merch" element={<Comingsoon />} />
        <Route exact path="/Game" element={<Game />} />
        {/* <Route exact path="/gcal" element={<GoogleCalender />} /> */}
      </Routes>
      {loginSignup && (
        <Modal2 showToast={showToast} setOpenModal={toggleLoginModal} />
      )}
    </div>
  );
}
export default App;
