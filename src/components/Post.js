import React from 'react';

export default class Post extends React.Component {

    state = {
        post: null
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;

        fetch('https://jsonplaceholder.typicode.com/posts/' + userId)
            .then(response => response.json())
            .then(post => this.setState({post}))
    }

    render() {
        const {post} = this.state
        return (
            <div>
                {
                    post && (<div>
                        <p>{post.userId}.{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <button onClick={() => this.props.history.replace(`/posts`)}>back</button>
                    </div>)
                }
            </div>
        )
    }
}
