import React from 'react';
import './App.css';
import createReactClass from 'create-react-class';
import V4 from 'node-uuid';

const Test = createReactClass({
  getInitialState: function() {
    this.renderCount = 0;
    return {
      reply: '',
      update: false
    };
  },
  componentDidMount: function() {
    setInterval(() => {
      this.setState({
        update: !this.state.update
      });
    }, 500);
  },
  render: function() {
    let items = [];
    for (let i = 0; i < 1000; i++) {
      const id = V4();
      items.push({
        id: id,
        label: 'Label ' + id
      });
    }
    const expensiveViews = items.map((item) => {
      return (<div key={item.id} className="expensive-list-item">{item.label}</div>);
    });

    return (
      <div className="test">
        <div style={{color: 'red'}}>{this.renderCount++}</div>
        <div className="expensive-list">
          {expensiveViews}
        </div>
        <textarea value={this.state.reply} onChange={this.onReplyChanged} />
      </div>
    );
  },
  onReplyChanged: function(e) {
    this.setState({
      reply: e.currentTarget.value
    });
  }
});

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
