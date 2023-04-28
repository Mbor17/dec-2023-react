import React from 'react';

const FullComment = ({value}) => {
    return (
        <div>
            {
                JSON.stringify(value)
            }
        </div>
    );
};

export default FullComment;