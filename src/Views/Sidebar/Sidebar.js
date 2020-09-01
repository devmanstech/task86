import React, {useState} from 'react';
import ListItemLink from "./ListItemLink";
import SideContent from "./SideContent";
import ActionButtons from "./ActionButtons";

function Sidebar(props) {
    const [stepID, setStepID] = React.useState(1)
    const [stepState, setStepState] = React.useState(
        ['current', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled']
    )
    const [requestValues, setRequestValues] = useState({
        access_error: null,
        engineering_access: null,
        programming_access: null,
        racf_access: null,
        svn_access: "Yes",
        name: "user_info_name",
        racf: "userinfoRACFID",
        request: "License",
        hostid: "hostidid",
        license_usage: "Test Cell / Shop Floor",
        tools: [
            "Trim Config"
        ],
        other_request: "sdsdsd",
        business_case: "sdsdsd",
        comments: "sdsdsdsd",
        group_description: "What group are you in and what type of work do you do?",
        group_location: "Tractor, Cab, and Assy. Ops. (TCAO)",
        jdpsfocus: "Yes"
    })
    const [errorFlag, setErrorFlag] = useState(false)
    return (
        <div className="wrapper-container">
            <h1>Request Access</h1>
            <form id="request_access" role="application" className="wizard clearfix vertical" noValidate="noValidate">
                <ListItemLink stepID={stepID} setStepID={setStepID} stepState={stepState} setStepState={setStepState}/>
                <SideContent stepID={stepID} setStepID={setStepID} requestValues={requestValues}
                             setRequestValues={setRequestValues} setErrorFlag={setErrorFlag}/>
                <ActionButtons stepID={stepID} setStepID={setStepID} stepState={stepState} setStepState={setStepState}/>
            </form>
        </div>

    );
}

export default Sidebar;
