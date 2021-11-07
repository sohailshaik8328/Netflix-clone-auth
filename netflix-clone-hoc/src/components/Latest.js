// import React from 'react'
// import "../stylesheets/Main.css";
// import {Link, NavLink} from "react-router-dom";
// import Loader from './Loader';
// import WithData from './WithData';
import React from 'react'
import "../stylesheets/Main.css";
import {Link, NavLink} from "react-router-dom";
import Loader from './Loader';
import WithData from './WithData';
import { useEffect } from 'react';
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

let key = "AIzaSyBn8eLExZk5XSBEE7eB4dJePszGJx4P9JA"
let latestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=latestseries2021&maxResults=50`;
function Latest (props){
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
  
    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          history.push('/latest');
        }
      });
    }, [userName]);
  
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
  

        let {data} = props;
        // console.log(data)
        if(!data.length) {
            return (
                <Loader />
            )
        }
        return (
            <>
                <header className="header_section_main">
                    <div className="main_container">
                        <div className="main_header flex between .align_center">
                            <section className="header_left_main">
                                    <img className="main_logo" src="/images/logo (1).png" alt="logo" />
                            </section>

                            <section>
                                <ul className="flex ">
                                    <li><NavLink activeClassName="nav_active" to="/main" className="main_nav_a" href="#">All</NavLink></li>
                                    <li><NavLink activeClassName="nav_active" to="/music" className="main_nav_a" href="#">Music</NavLink></li>
                                    <li><NavLink activeClassName="nav_active" to="/hollywood" className="main_nav_a" href="#">Hollywood</NavLink></li>
                                    <li><NavLink activeClassName="nav_active" to="/trending" className="main_nav_a" href="#">Trending</NavLink></li>
                                    <li><NavLink activeClassName="nav_active" to="/latest" className="main_nav_a" href="#">Latest</NavLink></li>
                                </ul>
                            </section>

                            {/* <section className="header_right_main">
                                <Link  to="/" className="btn btn-rounded main_btn_signout">Sign Out</Link>
                            </section> */}
                            <section className="header_right_main flex between align_center">
                                <img className="userPhoto" src={userPhoto} alt="userPhoto" />
                                <h2 className="userName">{userName}</h2>
                                <Link onClick={handleAuth} to="/" className="btn btn-rounded main_btn_signout">Sign Out</Link>
                            </section>
                        </div>
                    </div>
                </header>
                <section>
                      <div className="main_container flex wrap between">
                        {
                          data.map((items) => (
                              <div className="movie_card flex-20" key={items.id} >
                                  <Link to={`/singlevideo/${items.id.videoId}`} >
                                        <img className="thumbnail" src={items.snippet.thumbnails.medium.url} alt="" />
                                  </Link>
                                    <p className="movie_title_single">{items.snippet.title}</p>
                              </div>
                          ))
                        }
                    </div>
                </section> 

        <footer className="footer">
            <p>Questions? Call 1-866-579-7172</p>
            <div className="footer-cols">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Ways To Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Netflix Originals</a></li>
                </ul>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Redeem Gift Cards</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Buy Gift Cards</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>

    </footer>
 
                        
            </>
        )
}

export default WithData(Latest, latestUrl)
