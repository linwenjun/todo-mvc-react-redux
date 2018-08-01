import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <TodoList />
        <Footer />
      </section>
    );
  }
}

export default App;
