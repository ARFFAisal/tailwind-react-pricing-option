import React from 'react';

const Link = ({route}) => {
    return (
        <li>
            <a href={route.path} className='hover:bg-amber-300'>{route.name} </a>
        </li>
    );
};

export default Link;