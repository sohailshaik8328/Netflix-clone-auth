import React, {useState, useEffect,useContext} from 'react'
import "../stylesheets/Home.css";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from './Firebase/firebase';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice';

// import React, {  } from 'react'
import UserContext from './Context'
function Home() {
 
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const hello = useContext(UserContext)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            history.push('/main');
          }
        });
      }, [userName]);
      console.log(hello,"user")
      const handleAuth = () => {
        if (!userName) {
          auth
            .signInWithPopup(provider)
            .then((result) => {
              setUser(result.user);
            })
            .catch((error) => {
              alert(error.message);
            });
        } else if (userName) {
          auth
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
              history.push('/');
            })
            .catch((err) => alert(err.message));
        }
      };

      const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

    return (
        <>
            <header className="showcase">
                <div className="showcase-top">
                    <img src="/images/logo (1).png" alt="Netflix Logo" />
                    <Link  onClick={handleAuth} className="btn btn-rounded google_btn">Sign In with google</Link>
                    {/* <Link to="/signin" className="btn btn-rounded">Sign In</Link> */}
                </div>
                {/* <SignOut>
                    <UserImg src={userPhoto} alt={userName} />
                    <DropDown>
                    <span onClick={handleAuth}>Sign out</span>
                    </DropDown>
                </SignOut> */}
                <div className="showcase-content">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h3>All of Netflix, starting at just ₹ 199.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <input type="email" name="email" id="mail" placeholder="Email address" />
                    <a href="#" className="btn btn-lg">GET STARTED</a>
                    {/* <div className="input">
                        <input type="email" name="email" placeholder="Email Address" />
                        <a href="#" className="btn-rounded"><button>GET STARTED</button></a>
                    </div> */}
                </div>
            </header>

            <section className="style-cards">
                <div className="card-0">
                    <img src="/images/2.jpg" alt="Netflix Mobile" />
                    <div className="desc-0">
                        <h1>Create profiles for kids.</h1>
                        <h3>Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                    </div>
                </div>
                <div className="card-1">
                    <div className="desc-1">
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>
                    <img src="/images/tv.png" alt="Netflix TV" />
                    <video className="video-1" autoplay="" playsinline="" muted="" loop=""><source src="1.m4v" type="video/mp4" /></video>
                </div>
                <div className="card-2">
                    <img src="/images/3.jpg" alt="Netflix Mobile" />
                    <div className="desc-2">
                        <h1>Download your shows to watch offline.</h1>
                        <h3>Save your favourites easily and always have something to watch.</h3>
                    </div>
                </div>
                <div className="card-3">
                    <div className="desc-3">
                        <h1>Watch everywhere.</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                    </div>
                    <img src="/images/4.png" alt="Device-Pile-In" />
                    <video className="video-2" autoplay="" playsinline="" muted="" loop=""><source src="2.m4v" type="video/mp4" /></video>
                </div>
            </section>

            <section className="lastsec">
                <div className="faq">
                    <h1>Frequently Asked Questions</h1>
                    <ul className="questions">
                        <li>What is Netflix?</li>
                        <li>How much does Netflix cost?</li>
                        <li>Where can I watch?</li>
                        <li>How do I cancel?</li>
                        <li>What can I watch on Netflix?</li>
                        <li>Is Netflix good for kids?</li>
                    </ul>
                    {/* <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="input">
                        <input type="email" name="email" placeholder="Email Address" />
                        <a href="#" className="btn-rounded"><button>GET STARTED</button></a>
                    </div> */}
                </div>
            </section>


            <footer className="footer">
                <p>Questions? Call 000-800-040-1843</p>
                <div className="footer-cols">
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Speed Test</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Help Centre</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Watch for Free</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                        <li><a href="#">Corporate Information</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Media Centre</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Netflix Originals</a></li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;


const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;



export default Home
