import React from 'react';
import PropTypes from 'prop-types';

function Bio({authorInfo}) {
    // console.log({...authorInfo});
    return (
        <div>
            <img className={authorInfo.isMediumMember ? "member" : null} src={authorInfo.image} style={{borderRadius: '50%', width: '10%'}} alt="author" />
            <span> {authorInfo.name}</span>
        </div>
    )
}

Bio.propTypes = {
    authorInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        isMediumMember: PropTypes.bool.isRequired
    }).isRequired
}

export default Bio;