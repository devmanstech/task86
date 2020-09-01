import React from 'react';
import get_host_id from "../../../Assets/img/get_host_id.jpg";
import eculp_ini from "../../../Assets/img/eculp_ini.jpg";

function MachineInfo() {
    return(
        <div id="Machine Info" className="panel">
            <h3>Machine Info</h3>
            <div className="row">
                <div className="col-1-2">
                    <div className="input-box">
                        <label htmlFor="hostid">Host ID<span className="req"></span></label>
                        <input name="hostid" id="hostid" className="clear-bottom" type="text"
                               spellCheck="false"/>
                    </div>
                </div>
                <div className="col-1-2">
                    <div className="input-box pad-left">
                        <label>What type of machine will this license be for?</label>
                        <ul id="license_usage" className="radio-list vertical clear-bottom-margin">
                            <li><input type="radio" name="license_usage" value="Personal Laptop" defaultChecked
                            />
                                <label></label>
                                <div>Personal Laptop</div>
                            </li>
                            <li><input type="radio" name="license_usage"
                                       value="Test Cell / Shop Floor"/><label></label>
                                <div>Test Cell / Shop Floor</div>
                            </li>
                            <li><input type="radio" name="license_usage" value="Other"/><label></label>
                                <div>Other</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-1-1">
                    <div className="steps-aware-accordion closed">
                        <div className="steps-aware-title"><b>Instructions for reading your computer's
                            Host
                            ID with GetHostID.exe</b></div>
                        <div className="steps-aware-body">
                            <p>In order to read your computer's Host ID, please download and run the
                                Windows <a
                                    href="../../downloads/GetHostID.exe">GetHostID.exe</a> program. Copy
                                and paste the resulting Host ID value into the text field above.</p>
                            <img src={get_host_id}
                                 style={{width: '50%',height: '50%', border:'none'}}
                                 alt="img/get_host_id.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-1-1">
                    <div className="steps-aware-accordion closed">
                        <div className="steps-aware-title"><b>Instructions for reading your computer's
                            Host
                            ID with ECULP</b></div>
                        <div className="steps-aware-body">
                            <p>In order to read your computer's Host ID, run the EcuLpIniConfig located
                                at one of the following locations:</p>
                            <p className="pad-left"><b>32-bit Machine:</b> C:\Program
                                Files\ECULP\ECULPINIConfig.exe</p>
                            <p className="pad-left"><b>64-bit Machine:</b> C:\Program Files
                                (x86)\ECULP\ECULPINIConfig.exe</p>
                            <p>Go to the security tab of the program. The Host ID will be displayed in
                                the upper box and the current JDLM license status will be displayed in
                                the lower box.</p>
                            <img src={eculp_ini} style={{width: '75%', height: '75%', border:'none'}} alt="img/eculp_ini.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MachineInfo;
