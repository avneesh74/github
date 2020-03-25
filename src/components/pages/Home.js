import React, {Fragment} from 'react'
import SearchUser from '../layout/users/search';
import Users from '../layout/users/Users';

 const Home = () => {
    return (
        <Fragment>
            <SearchUser/>
            <Users/>
        </Fragment>
    )
}

export default Home