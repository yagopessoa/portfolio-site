import React from 'react';
import '../../App.css';
import { Provider } from 'react-redux';
import { Title, Footer } from './Home.styles';
import store from '../../Redux/store';

const Home = () => {
  const currentYear = () => {
    const now = new Date();
    return now.getFullYear();
  };

  return (
    <div>
      <header className="App">
        <Provider store={store}>
          <Title>Hello World!</Title>
        </Provider>
        <Footer caption>
          Coded with ♥ by
          {` `}
          <a
            href="http://newsapi.org"
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
