import React from 'react';
import './style.css';

const STATUS = {
    CONNECTED: 'STATUS_CONNECTED',
    CLOSED: 'STATUS_CLOSED',
    PENDING: 'STATUS_PENDING'
}

const renderStatus = (stat) => {
    switch(stat) {
        case stat == STATUS.CONNECTED:
            return 'open'
        case stat == STATUS.CLOSED:
            return 'closed'
        default:
            return 'pending'
    }
}

const handleClick = (e, stat) => {
    if (stat == STATUS.CONNECTED) {
        // navigate to messenger page
    }
}

const PullRequestItem = ({handle, stat}) => {
    return (
        <li className="pull-request-item d-flex flex-row justify-content-between" onClick={e => handleClick(e, stat)}>
            <h3 className="p-4">{handle}</h3>
            <h3 className="p-4">{ renderStatus(stat) }</h3>
        </li>
    )
}

export default PullRequestItem;
