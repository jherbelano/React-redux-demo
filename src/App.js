import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import PizzaContainer from './components/PizzaContainer';
import HooksPizzaContainer from './components/HooksPizzaContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import PhotoContainer from './components/PhotoContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <PhotoContainer/>
        <UserContainer/>
        <ItemContainer cake/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <NewCakeContainer/>

        <ItemContainer />
        <HooksIceCreamContainer/>
        <IceCreamContainer/>
        <HooksPizzaContainer/>
        <PizzaContainer/>
      </div>
    </Provider>
  );
}

export default App;
