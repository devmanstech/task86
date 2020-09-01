import React, {useEffect, useState} from 'react';

function ListItem(props) {
    const {index,step,handleClick,stepState} = props;

    const [style,setStyle] = useState('disabled')
    useEffect(()=>{
        setStyle(props.stepState[index-1])
    },[stepState])


    return (
        <li role="tab" className={style}><a
            id="request_access-t-0" onClick={()=>handleClick(props.index)}>
            <span className="number">{index}.</span> {step}</a></li>
    );

}


function ListItemLink(props) {
    const {setStepState,stepState,stepID,setStepID}=props
    const steps = ['Overview', 'User Info', 'Machine Info', 'Department Info', 'Tool Info', 'Comments', 'Confirm'];
    const handleClick=stepID=>{
        if (stepState[stepID-1]=='disabled')return
        if (stepID>1){
            var tempStepState = [...stepState];
            tempStepState[0]='done'
            setStepState(tempStepState)
        }
        setStepID(stepID)
    }
    return (
        <div className="steps clearfix">
                <ul role="tablist">
                    {
                    steps.map((step,key)=>{
                        return <ListItem handleClick={handleClick}
                                         key={key}
                                         step={step}
                                         index={key+1}
                                         curStepId = {stepID}
                                         stepState = {stepState}
                        />
                        })
                    }
                </ul>
        </div>
    );
}

export default ListItemLink;
