import React from 'react';

export default class Comments extends React.Component {

    state = {
        comments: []
    }

    postId; // fix bag

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.comments.map(comment => (
                            <div>
                                <p>{comment.postId}. {comment.id}</p>
                                <p>{comment.name}</p>
                                <p>{comment.email}</p>
                                <p>{comment.body}</p>
                                <hr/>
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}
