import React from 'react';

export default  class Posts extends React.Component {

    state = {
        posts:[]
    }
    userId;



    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.posts.map(post => (
                            <div>

                                <p>{post.userId}.{post.id} {post.title}</p>
                                <button  onClick={() => this.props.history.push(`/posts/${post.id}`) }>details</button>
                                <hr/>

                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}
