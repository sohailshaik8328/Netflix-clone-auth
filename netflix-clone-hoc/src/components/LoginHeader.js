import React from 'react';
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


function LoginHeader() {
    const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push('/main');
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
    return (
        <div>
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

                    <section className="header_right_main flex between align_center">
                        <img className="userPhoto" src={userPhoto} alt="userPhoto" />
                        <h2 className="userName">{userName}</h2>
                        <Link onClick={handleAuth} to="/" className="btn btn-rounded main_btn_signout">Sign Out</Link>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader
