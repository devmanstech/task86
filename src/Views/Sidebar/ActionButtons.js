import React, {useEffect} from 'react';

function ActionButtons(props) {
    const {setStepState,stepState,stepID,setStepID}=props
    const onNext = ()=>{
        const curItemState = stepState[stepID]
        var curStates = {...stepState}
        if (stepID===1) {
            curStates[0] = 'done'
            curStates[1] = 'current'
            console.log(curStates)
            setStepState(curStates)
            setStepID(stepID + 1)
            return
        }
        console.log(curItemState)
        // if (curItemState=='disabled' || curItemState=='error') return
        if (curItemState=='error') return
        setStepID(stepID+1)
    }
    const onPrevious = ()=>{
        if (stepID==1)return
        setStepID(stepID-1)
    }
    return (
        <div className="actions clearfix">
            <ul role="menu" aria-label="Pagination">
                <li className={stepID===1?"disabled":"none"} aria-disabled="false"><a role="menuitem" onClick={onPrevious}>Prev</a></li>
                <li aria-hidden="false" aria-disabled="false"><a role="menuitem" onClick={onNext}>Next</a></li>
            </ul>
        </div>
    );
}

export default ActionButtons;
