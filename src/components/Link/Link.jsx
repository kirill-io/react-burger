import React from 'react';
import './Link.css';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  selectionTag (propsTag) {
    let tag;

    switch (propsTag) {
      case 'BurgerIcon':
        tag = <BurgerIcon type={this.props.type}/>;
        break;
      case 'ListIcon':
        tag = <ListIcon type={this.props.type} />;
        break;
      case 'ProfileIcon':
        tag = <ProfileIcon type={this.props.type} />;
        break;
    }

    return tag;
  }

  render() {
    return (
      <a href="#" className="link pt-4 pr-5 pb-4 pl-5">
        <div className='mr-2'>
          {this.selectionTag(this.props.tag)}
        </div>
        <span className={this.props.typeText}>{this.props.children}</span>
      </a>
    )
  };
}

export default Link;
