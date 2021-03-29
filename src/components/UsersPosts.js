import React from 'react';

export default class UsersPosts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;

        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(response => response.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                {
                    <button onClick={() => this.props.history.replace(`/users`)}>back</button>
                }
                {
                    posts.map(post => (
                        <div>
                            <p>{post.userId}.{post.id} {post.title}</p>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
