import React from 'react';

function UserInfo() {
    return (
        <div id="User Info" className="panel">
            <h3>User Info</h3>
            <div className="col-1-2">
                <div className="input-box">
                    <label htmlFor="user_name">Name<span className="req" /></label>
                    <input name="user_name" id="user_name" className="" type="text" spellCheck="false"/>
                </div>
                <div className="input-box">
                    <label htmlFor="racf">RACF ID<span className="req" /></label>
                    <input name="racf" id="racf" className="" type="text" spellCheck="false"/>
                </div>
            </div>
            <div className="col-1-2">
                <div className="input-box pad-left">
                    <label>What are you requesting?<span className="req" /></label>
                    <ul id="request_type" className="radio-list vertical clear-bottom-margin">
                        <li><input type="radio" name="request_type" value="Download Access"
                                   required/><label></label>
                            <div>Download Access</div>
                        </li>
                        <li><input type="radio" name="request_type" value="License"/><label></label>
                            <div>License Request</div>
                        </li>
                        <li><input type="radio" name="request_type"
                                   value="Download Access and License"/><label></label>
                            <div>Both</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default UserInfo;
