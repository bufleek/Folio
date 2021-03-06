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
                <div></div>
            </div>
        );
    }
}

class AboutMe extends React.Component{
    render(){
        return(
            <div id={"about-me-container"}>
                <div id={"about-me-inner"}>
                    <h2 className={"text-primary"}>About Me</h2>
                    <div id={"about-me"}>
                        <LanguagesAndFrameworks />
                        <SkillsAndApplications />
                        <QualitiesAndMerits/>
                    </div>
                </div>
            </div>
        );
    }
}

class LanguagesAndFrameworks extends React.Component{
    render(){
        return(
            <div className={"section"}>
                <h3 className={"title"}>Languages and Frameworks</h3>
                <ul>
                    <li>Kotlin</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>JavaScript and JQuery</li>
                    <li>PHP</li>
                    <li>Bootstrap</li>
                    <li>HTML and CSS</li>
                </ul>
            </div>
        )
    }
}

class SkillsAndApplications extends React.Component{
    render(){
        return(
            <div className={"section"}>
                <h3 className={"title"}>Skills and Applications</h3>
                <ul>
                    <li>Android Development</li>
                    <li>Web Development</li>
                    <li>UI & UX design</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                </ul>
            </div>
        )
    }
}

class QualitiesAndMerits extends React.Component{
    render(){
        return(
            <div className={"section"}>
                <h3 className={"title"}>Qualities and Merits</h3>
                <ul>
                    <li>Writing clean & testable code</li>
                    <li>Timely Delivery</li>
                    <li>Team work and leadership</li>
                    <li>Effective Communication</li>
                </ul>
            </div>
        )
    }
}

class Background extends React.Component {
    render(){
        return(
            <div id={"background"} className={"full-screen"}>
                <div></div>
                <div className={"my-image"}></div>
            </div>
        )
    }
}

class Body extends React.Component{
    render(){
        return(
            <div>
                <Background />
                <Landing />
                <Socials />
                <AboutMe />
            </div>
        )
    }
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
)

