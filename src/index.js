import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import FacebookIcon from './assets/images/facebook.svg';
import TwitterIcon from './assets/images/twitter.svg';
import InstagramIcon from './assets/images/instagram.svg';
import linkedInIcon from './assets/images/linkedin.svg'
const facebookLink = 'https://www.facebook.com/brunoh.kiprop';
const twitterLink = 'https://twitter.com/brunookiprop?s=08';
const instagramLink = 'https://www.instagram.com/brunookiprop';
const linkedInLink = 'https://www.linkedin.com/in/bruno-kiprop-2ab7011b3';
const githubLink = 'https://www.github.com/bufleek';


class Socials extends React.Component{
    render() {
        return (
            <div id={"socials-bar"}>
                <ul>
                    <li><a href={linkedInLink} target='_blank'><img src={linkedInIcon}/></a></li>
                    <li><a href={facebookLink} target='_blank'><img src={FacebookIcon}/></a></li>
                    <li><a href={twitterLink} target='_blank'><img src={TwitterIcon}/></a></li>
                    <li><a href={instagramLink} target='_blank'><img src={InstagramIcon}/></a></li>
                    <li><a href={githubLink} target='_blank'><button className={"btn btn-primary btn-rounded"}>GITHUB</button></a></li>
                </ul>
            </div>
        )
    }
}

class Landing extends React.Component{
    render(){
        return(
            <div className={"full-screen landing"}>
                <div className={"my-description"}>
                    <p>Hi!!, I am</p>
                    <h1 className="my-name">Bruno Kiprop</h1>
                    <p className={"my-title"}>A Software (Android) Developer.</p>
                    <div className="landing-links">   
                        <button className={"btn btn-outlined"}>CONTACT ME</button>   
                        <button className={"btn btn-primary"}>MY PROJECTS</button>
                    </div>
                </div>
                <div className={"my-image"} alt="Bruno Image">
                </div>
            </div>
        );
    }
}

class Body extends React.Component{
    render(){
        return(
            <div>
                <Landing />
                <Socials />
            </div>
        )
    }
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
)

