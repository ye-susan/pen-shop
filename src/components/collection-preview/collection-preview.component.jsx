import React from 'react';

import './collection-preview.styles.scss';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'></div>
                {
                    items.map((item) => (
                        <div>item.name</div>
                    ))
                }

        </div>
    )
}