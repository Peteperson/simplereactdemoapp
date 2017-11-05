import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../../actions/commentActions';
import CommentList from './CommentList';
import { browserHistory } from 'react-router';
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader';

class CommentsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCommentPage = this.redirectToAddCommentPage.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadComments();
    }

    redirectToAddCommentPage() {
        browserHistory.push('/comment');
    }

    commentRow(comment, index) {
        return (
            <div key={index}>{comment.title}</div>
        );
    }

    render() {
        const { comments } = this.props;
        return (
            <OverlayLoader
                color={'red'}
                loader="ScaleLoader"
                text="Loading... Please wait!"
                active={!(comments && comments.length > 0)}
                backgroundColor={'black'}
                opacity=".8">
                <div>
                    <h1>Comments</h1>
                    {/* <input type="submit"
                        value="Add comment"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCommentPage} /> */}
                    {<CommentList comments={comments} />}
                </div>
            </OverlayLoader>
        );
    }
}

CommentsPage.propTypes = {
    comments: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(commentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
