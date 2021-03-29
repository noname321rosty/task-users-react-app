import React from 'react';

export default class Posts extends React.Component {

    state = {
        posts: []
    }

    userId; // fix err

    deletePost(id) {
        this.setState({
            posts: this.state.posts.filter(post => post.id !== id)
        })
        console.log(`post ${id} is removed`);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => (
                        <div>
                            <p>{post.userId}.{post.id} {post.title}</p>
                            <button onClick={() => this.props.history.push(`/posts/${post.id}`)}>details</button>
                            <button onClick={() => this.props.history.push(`/posts/comments/${post.id}`)}>comments
                            </button>
                            <button>edit</button>
                            <button onClick={() => this.deletePost(post.id)}>delete</button>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
