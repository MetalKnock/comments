import CommentContainer from "@/containers/CommentContainer/CommentContainer";
import {commentsPage1} from "@/data/comments";
import {getChildComments} from "@/utils/comment";

function Comments() {
    console.log(commentsPage1.data);
    console.log(
        getChildComments({comments: commentsPage1.data, parentId: 203}),
    );
    return <CommentContainer />;
}

export default Comments;
