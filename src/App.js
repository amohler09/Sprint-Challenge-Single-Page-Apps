import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import SearchForm from './components/SearchForm';
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
       <WelcomePage />
     <Route path='/search'>
       <SearchForm />
     </Route>
     <Route path='/characters'>
       <CharacterList />
     </Route>
    </main>
    
  );
}
