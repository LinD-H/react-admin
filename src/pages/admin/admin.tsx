import React from 'react';
import { Redirect } from 'react-router-dom';
import { user } from '../../util/memoryUtils';

const pass = () => {

    if (!user || !user.id) {
        return <Redirect to="./" />
    }
}


export default function admin() {
    pass()


    return (
        <div>
            <h1>admin</h1>
        </div>
    )
}
