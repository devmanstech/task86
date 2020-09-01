import React from 'react';

function Confirm() {
    return(
        <div className="panel" id="Confirm">
            <div className="row">
                <div className="col-1-1">
                    <h3>Confirm</h3>
                    <p>Please take a few moment to review the details of your license request. When
                        satisfied, click the
                        'Finish' button to submit your report request. </p>
                    <pre id="license_request"/>
                    <dl className="alert error" id="Error" style={{paddingRight:20}}>
                        <dt>Access Request submission failed!</dt>
                        <dd>The 'finish' button on this request form is designed to automatically format
                            and send the
                            summary content in an email message. It appears you are having issues with
                            finishing the
                            interactive request form, please manually submit your information to JDPS
                            ECULP using the
                            following guidelines:<br/><br/></dd>
                        <dd>&nbsp;&nbsp;&nbsp;&nbsp;-Copy and paste the summary content above into the
                            body of an
                            email<br/></dd>
                        <dd>&nbsp;&nbsp;&nbsp;&nbsp;-Mail to JDPS ECULP
                            "GoogleInternal@GoogleInternal.com"<br/></dd>
                        <dd id="subject_line"/>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Confirm;
