import React from 'react';
import './about.scss';

const About = (): JSX.Element => {
  return (
    <main className="about">
      <h3>📜 About</h3>
      <article>
        Components are the heart of React's powerful, declarative programming
        model. React Router is a collection of navigational components that
        compose declaratively with your application. Whether you want to have
        bookmarkable URLs for your web app or a composable way to navigate in
        React Native, React Router works wherever React is rendering--so take
        your pick!
      </article>
    </main>
  );
};
export default About;
