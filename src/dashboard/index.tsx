import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = (): JSX.Element => {
    const { id } = useParams();

    return (
        <React.Fragment>
            <h3>It is working!</h3>
            {id && <span>Id: {id}</span>}
        </React.Fragment>
    );
};

export default Dashboard;
