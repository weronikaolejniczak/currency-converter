import React from 'react';
import {useRouteMatch, useParams} from 'react-router-dom';

const About = () => {
    let match = useRouteMatch();
    let params = useParams();

    console.log('match:', match);
    console.log('params:', params);

    return (
        <h2>About page</h2>
    );
}

export default About;
