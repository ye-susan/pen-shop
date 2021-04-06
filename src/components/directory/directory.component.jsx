import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "BallPoint Pens",
          imageUrl: "/images/pens/pens-ph.png",
          id: 1,
          linkUrl: "shop/ballpoint",
        },
        {
          title: "Fountain Pens",
          imageUrl: "/images/pens/pens-ph.png",
          id: 2,
          linkUrl: "shop/fountain",
        },
        {
          title: "Vintage Pens",
          imageUrl: "/images/pens/pens-ph.png",
          id: 3,
          linkUrl: "shop/vintage",
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
