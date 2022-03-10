import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SocialButtons from './components/Social-buttons';
import MenuBrunch from './pages/MenuBrunch';
import MenuDinner from './pages/MenuDinner';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <SocialButtons />
          <div className="container">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:username?" component={Profile} />
          <Route exact path="/menu/brunch" component={MenuBrunch} />
          <Route exact path="/menu/dinner" component={MenuDinner} />


          <Route component={NoMatch} />
        </Switch>
      </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
