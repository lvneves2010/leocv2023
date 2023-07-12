import * as React from 'react';
import { Button } from 'carbon-components-react';
// import { useState } from 'react';

// import { HashRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'mobx-react';
// import { HeaderContainer } from 'carbon-components-react';

// import HomePageHeader from './components/HomePageHeader';
// import ResourceView from './components/ResourceView';
// import ResourceDetailsView from './components/ResourceDetailView';
// import Footer from './components/Footer';
// import StartPage from './components/StartPage';

import Header from './components/Header';
import Presentation from './components/Presentation';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';


function Home() {


	return(
        <div id="Home">
            <Header></Header>
            <Presentation></Presentation>
            <Profile></Profile>
            <Education></Education>
            <Experience></Experience>
            <Button>
                PDF Version
            </Button>

        </div>
	);
}

export default Home;
