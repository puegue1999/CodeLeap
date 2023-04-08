import React, { useState }  from 'react';
import Content from './content'


function MainScreen () {

    return (
        <div>
            <div>
                <text>CodeLeap Network</text>
            </div>
            <div>
                <Content />
            </div>
        </div>
    );
}

export default MainScreen;