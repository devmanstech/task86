import React from 'react';

function Comment() {
    return(
        <div className="panel" id="comments">
            <div className="row">
                <div className="col-1-1">
                    <h3>Comments</h3>
                    <p className="pad-bottom">Do you have any additional comments, questions, or
                        concerns related to
                        this
                        request that we should be aware of?</p>
                    <div className="input-box clear-bottom">
                        <textarea id="additional_comments" style={{height:'10em'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;
