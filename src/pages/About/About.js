import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="App-About">
            <section className="about-container">
                <h2>About page</h2>
                <p>Hi! My name is <b>Weronika</b> and I'm a front end developer.</p>

                <p>This is a <b>React</b> project with styling in <b>CSS</b>, <b>API data fetching</b> and simple page routing with <b>React Router</b>.</p>

                <p>Credits to <a href="https://github.com/patrykomiotek" alt="Patryk Omiotek @GitHub" rel="noopener noreferrer" target="_blank">@patrykomiotek</a> from <a href="https://szkolareacta.pl" alt="Szkola Reacta" rel="noopener noreferrer" target="_blank">Szkola Reacta</a>.</p>

                <p>Check out original code at <a href="https://github.com/patrykomiotek/workshops-currency-converter" alt="Patryk Omiotek @GitHub" rel="noopener noreferrer" target="_blank">workshops-currency-converter</a>.</p>
            </section>
        </div>
    );
}

export default About;
