import React from 'react';

// import content
import Hooks from './content/Hooks';
import Redux from './content/Redux';
// import GraphQL from './content/GraphQL';

function Content() {
    return (
        <div className="content">
            <Hooks />
            <Redux />
            {/* <GraphQL /> */}
        </div>
    );
}

export default Content;
