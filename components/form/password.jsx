import React from 'react'
import InvisibleIcon from '../../assets/visibility-hidden.svg'
import VisibleIcon from '../../assets/visibility-visible.svg'

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState(state => ({ visible: !state.visible }));
  }
  
  render() {
    return (
      <div className="relative">
        <input
          type={!this.state.visible ? 'text': 'password'}
          {...this.props}
        />
        <button
          onClick={this.handleToggle}
          className="absolute transform mt-1 right-4 top-1/2 -translate-y-1/2 focus:outline-none md:mt-2"
        >
          {!this.state.visible
            ? <VisibleIcon className="w-5 text-alto fill-current" />
            : <InvisibleIcon className="w-5 text-alto fill-current" />
          }
        </button>
      </div>
    );
  };
};
