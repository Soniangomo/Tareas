import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {

        super();
    this.state = {
        title:'',
        responsible: '',
        description: '',
        priority: 'low',
        message: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleInput(e) {
    const { value, name} = e.target;
    this.setState({
        [name]: value
    })
}


handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log('sending the data...');
}

save(e) {
    this.setState({
        message:'save correctly'
    })
}


render() {
    return(
        <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    onChange={this.handleInput}
                    name="title"
                    className="form-control"
                    placeholder="title"
                  />
        </div>
        <div className="form-group">
        <input
                    type="text"
                    name="responsible"
                    className="form-control"
                    placeholder="responsible"
                    onChange={this.handleInput}
                  />
        </div>
        <div className="form-group">
        <input
                    type="text"
                    name="descrition"
                    className="form-control"
                    placeholder="description"
                    onChange={this.handleInput}
                  />
        </div>
        <div className="form-group">
         <select
          name="priority"
          className="form-control"
          onChange={this.handleInput}
          >
              <option>low</option>
              <option>medium</option>
              <option>hihg</option>
          </select>
        
        </div>

        <div>
        <button onClick={this.save.bind(this)}> save</button>
        <span style={{color:'green'}}> {this.state.message} </span>
        </div>
        </form>
        </div>

    )
 }
}

export default TodoForm;
