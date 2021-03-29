import React from 'react';

export default class Users extends React.Component {

    state = {
        users: []
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.users.map(user => (
                            <div>
                                <p>{user.id}. {user.name}</p>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                                <button onClick={() => this.props.history.push(`/users/${user.id}`)}>details</button>
                                <button onClick={() => this.props.history.push(`/users/posts/${user.id}`)}>posts</button>
                                <button>add new post</button>
                                <hr/>
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}
