import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/image/Blogging Animation/Blogging - Colour/blogging.svg";
import Common from './Common';

const Home = () =>{
return(
    <>
    <Common name="Welcome to CodeForce" imgsrc={web} visit="/about" btname="About us" />
    </>
);
};

export default Home;