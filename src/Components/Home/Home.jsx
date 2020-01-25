import React from 'react';
import '../../App.css';
import { Provider } from 'react-redux';
import {
  Container,
  Title,
  Footer,
  SocialContainer,
  CircularButtonLink
} from './Home.styles';
import store from '../../Redux/store';
import PortfolioCard from './PortfolioCard';
import { PROJECTS } from '../../utils';
import Linkedin from '../Icons/Linkedin';
import Github from '../Icons/Github';

const Home = () => {
  const currentYear = () => {
    const now = new Date();
    return now.getFullYear();
  };

  return (
    <div>
      <header className="App">
        <Provider store={store}>
          <Container>
            <Title>Portfolio - Yago Pessoa</Title>
            <SocialContainer>
              <CircularButtonLink
                href="https://www.linkedin.com/in/yagopessoa"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <Linkedin />
              </CircularButtonLink>
              <CircularButtonLink
                href="https://github.com/yagopessoa?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <Github />
              </CircularButtonLink>
            </SocialContainer>
            {PROJECTS.map(props => (
              <PortfolioCard key={props.title} {...props} />
            ))}
          </Container>
        </Provider>
        <Footer caption>
          Coded with ♥ by
          {` `}
          <a
            href="https://www.linkedin.com/in/yagopessoa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yago Pessoa
          </a>
          {` - Copyright © ${currentYear()}`}
        </Footer>
      </header>
    </div>
  );
};

export default Home;
