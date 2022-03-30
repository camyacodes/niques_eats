import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';


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
import Success from './pages/Success';
import Detail from './pages/Detail';
import { StoreProvider } from "./utils/GlobalState";
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import Auth from "./utils/auth";
import Cart from './components/Cart';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (

    <ApolloProvider client={client} id="content">
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <StoreProvider>
            <Header />
            <SocialButtons />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/:username?" component={Profile} />
                <Route exact path="/menu" component={MenuBrunch} />
                <Route exact path="/menu/dinner" component={MenuDinner} />
                <Route exact path="/orderHistory" component={OrderHistory} />
                <Route exact path="/products/:id" component={Detail} />
                <Route exact path="/success" component={Success} />
                <Route exact path="/checkout" component={Checkout} />
                <Route path="/admin" component={Admin} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </StoreProvider>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
   
  );
}

export default App;
