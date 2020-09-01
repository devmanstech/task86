import React from 'react';
import { AnimateOnChange } from 'react-animation'
import Overview from "./Pages/Overview";
import UserInfo from "./Pages/UserInfo";
import MachineInfo from "./Pages/MachineInfo";
import DepartmentInfo from "./Pages/DepartmentInfo";
import ToolInfo from "./Pages/ToolInfo";
import Comment from "./Pages/Comment";
import Confirm from "./Pages/Confirm";
import StepWizard from 'react-step-wizard';

function SideContent(props) {
    const {stepID, setStepID, requestValues, setRequestValues, setErrorFlag} = props
    return (
        <div className="content clearfix">
            <AnimateOnChange style={{display:'block'}}>
                {
                    stepID==1&&
                    <Overview {...props}/>
                }
                {
                    stepID==2&&
                    <UserInfo {...props}/>
                }
                {
                    stepID==3&&
                    <MachineInfo {...props}/>
                }
                {
                    stepID==4&&
                    <DepartmentInfo {...props}/>
                }
                {
                    stepID==5&&
                    <ToolInfo {...props}/>
                }
                {
                    stepID==6&&
                    <Comment {...props}/>
                }
                {
                    stepID==7&&
                    <Confirm {...props}/>
                }
            </AnimateOnChange>
        </div>
    );
}

export default SideContent;
