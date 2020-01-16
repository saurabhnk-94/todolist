import React, { Component } from "react";
import { connect } from "react-redux";
import { createToDo } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.renderList = this.renderList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.resetItem = this.resetItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  deleteItem(index) {
   const newList = this.props.items.filter((x) => this.props.items.indexOf(x) !== index );
   this.props.createToDo(newList);
  }

  renderList() {
    return this.props.items.map((item, index) => {
      return <div key={index}>{item.title} <button onClick={(event) => this.deleteItem(index)}>delete</button> </div>;
    });
  }

  addItem() {
    const newList = [...this.props.items, { title: this.state.text }];
    this.props.createToDo(newList);
    this.setState({
        text:""
    })
  } 

  sortItems() {
    const newList = [...this.props.items].sort(function(a,b) {return (a.title.toLowerCase()<b.title.toLowerCase())?(-1):(1)});
    this.props.createToDo(newList);
  }

  resetItem() {
    const newList = [];
    this.props.createToDo(newList);
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.text}
          onChange={event => this.setState({ text: event.target.value })}
        ></textarea>
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.resetItem}>Reset</button>
        <button onClick={this.sortItems}>Sort</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        items:state.todo.items
    };
}

export default connect(mapStateToProps, {
    createToDo
})(TodoList);