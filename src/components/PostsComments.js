import React from 'react';

export default class PostsComments extends React.Component {

    state = {
        comments: []
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;

        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
            .then(response => response.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                {
                    <button onClick={() => this.props.history.replace(`/posts`)}>back</button>
                }
                {
                    comments.map(comment => (
                        <div>
                            <p>{comment.postId}.{comment.id} </p>
                            <p>{comment.name} </p>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
