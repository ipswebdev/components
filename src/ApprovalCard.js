import React from "react";
import CommentDetail from "./CommentDetail";

const ApprovalCard = (props) => {
    const showComment = props.showComment;
    return (
        <div className="card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
        
    );
}

export default ApprovalCard;