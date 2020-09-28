import React, { Component, Suspense, lazy } from 'react';
import './App.css';
// import Home from './components/home';
import Blog from './components/blog';
import About from './components/about';
import Contact from './components/contactUS';
import MenuBar from './components/menuBar';
import ShoppingCart from './components/shoppingCart/shoppingCart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/table'; 
const Home = lazy(() => import('./components/home'));

class App extends Component {


  renderShirts(routprops) {
    console.log(routprops);
    return <Blog />
  }

  handleShoppingCart() {
    console.log("hi")
    this.context.router.push('/about');
  }
  render() {

    return (

      <div className="App container-flued">
        <header className="App-header">
          {/*    { <img src={logo} className="App-logo" alt="logo" /> } */}
          <div>
            RedUX and React JS
          </div>
          {/* <div> <a to={'/shoppingCart'} className="nav-link">Shopping Cart</a></div> */}
        </header>

        <div>
          <Router>
            <MenuBar />
            <div className="main-content">
              <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/blog/:id" render={routerProps => this.renderShirts(routerProps)} />
                  <Route exact path="/table" component={Table} />
                  <Route exact path="/shoppingCart" component={ShoppingCart} />

                </Suspense>
              </Switch>
            </div>
          </Router>
        </div>
      </div>

    );
  }
}

export default App;
 