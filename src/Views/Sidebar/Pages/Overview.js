import React from 'react';

function Overview(props) {
    return (
        <div id="Overview" className="panel" style={{transition:'opacity 1.5s',opacity:1}}>
            <h3>Overview</h3>
            <p><b>On January 4, 2016, the Focus Tools website migrated to a new webserver.</b> As part
                of this migration, security access is now managed differently and the changes are worth
                noting:</p>
            <ul className="pad-left">
                <li type="square">Download access on the Focus Tools website is now managed by Active
                    Directory (AD) groups and no longer managed per individual RACF UserID.
                </li>
                <li type="square">We expect this to make security maintenance easier in the long run.
                    Instead of granting individuals access, we can now grant access by team or other
                    functional AD group.
                </li>
            </ul>
            <p>In order to request a license file and/or download access, please use the interactive
                request form below.</p>
            <br/>
            {/*Browser Caution Message*/}
            <dl className="alert caution" style={{paddingRight: 20}}>
                <dd>Note that this is an interactive request form which is designed to show and hide
                    content based on your responses. We have had reports of this form not
                    functioning correctly with certain web browsers. <b>We suggest using Google
                        Chrome and making sure that Javascript is enabled.</b></dd>
            </dl>
        </div>
    )
}


export default Overview;
