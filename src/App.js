import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <CharacterList />
    </main>
  );
}
