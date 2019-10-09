import React from 'react';
import createReactClass from 'create-react-class';
import _ from 'underscore';

const Textarea = createReactClass({
  getInitialState: function() {
    return {
      value: this.props.defaultValue
    };
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    const props = _.omit(this.props, 'defaultValue', 'value', 'onChange');
    props.value = this.state.value;
    return (
      <textarea {...props} onChange={this.onChanged} />
    );
  },

  onChanged: function(e) {
    const value = e.currentTarget.value;
    this.setState({
      value: value
    });
    console.log(value);
    this.props.onChange({
      value: value
    });
  }
});

export default Textarea;
