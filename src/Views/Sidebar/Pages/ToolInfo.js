import React from 'react';

function ToolInfo() {
    return(
        <div id="toolinfo" className="panel">
            <h3>Tool Info</h3>
            <p>Using the checkboxes below, please tell us which FOCUS Tools you are needing access
                to.</p>
            <div className="row">
                <div className="col-1-2">
                    <ul className="thin-list clear-bottom-margin">
                        <li><input type="checkbox" id="ecsuite" value="EcSuite"/><label></label>
                            <div className="check-label">EcSuite</div>
                        </li>
                        <li><input type="checkbox" id="ecucpp" value="ECUCPP"/><label></label>
                            <div className="check-label">ECUCPP</div>
                        </li>
                        <li><input type="checkbox" id="eculp" value="ECULP"/><label></label>
                            <div className="check-label">ECULP</div>
                        </li>
                        <li><input type="checkbox" id="ecuprogrammer"
                                   value="ECU Programmer"/><label></label>
                            <div className="check-label">ECUProgrammer</div>
                        </li>
                    </ul>
                </div>

                <div className="col-1-2">
                    <ul className="thin-list clear-bottom-margin">
                        <li><input type="checkbox" id="devx" value="DevX"/><label></label>
                            <div className="check-label">DevX/CANard</div>
                        </li>
                        <li><input type="checkbox" id="omnical" value="OmniCal"/><label></label>
                            <div className="check-label">OmniCal</div>
                        </li>
                        <li><input type="checkbox" id="payloadviewer"
                                   value="PayloadViewer"/><label></label>
                            <div className="check-label">PayloadViewer</div>
                        </li>
                        <li><input type="checkbox" id="trimconfig" value="Trim Config"/><label></label>
                            <div className="check-label">TrimConfig</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-1-1">
                    <br/>
                    <div className="input-box">
                        <label htmlFor="other">Other:
                            <div className="subtext">(Please specify)</div>
                        </label>
                        <input id="other_request" className="clear-bottom" type="text"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-1-1">
                    <h3>Business Case</h3>
                    <p>Please briefly outline your business case or need for using our tools.</p>
                    <ul className="pad-left">
                        <li type="square">What tools are you using and why?</li>
                        <li type="square">What type of work are you doing?</li>
                        <li type="square">What functionality do you need?</li>
                    </ul>
                    <p className="pad-bottom"><b>NOTE: You will have to outline your business case or
                        need for using
                        each of
                        our tools.</b> Some tools are more restricted outside of FOCUS Engine
                        Engineering, and
                        additional usage information might be required.</p>
                    <div className="input-box clear-bottom">
                                        <textarea id="business_case" name="business_case" style={{height:'10em'}}
                                                  required/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ToolInfo;
