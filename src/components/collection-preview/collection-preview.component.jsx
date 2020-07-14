import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        { items
            //make sure index is less than 4, since we only want 4 items to display per category
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;