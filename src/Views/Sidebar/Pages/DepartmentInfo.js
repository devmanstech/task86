import React from 'react';

function DepartmentInfo() {
    return(
        <div className="panel" id="department_info">
            <h3>Department Info</h3>
            <div className="row">
                <div className="col-1-1">
                    <p>In order to receive the proper access to the FOCUS Tools website in a timely
                        manner, it is very important that you answer the following questions to the best
                        of your knowledge.</p>
                    <br/>
                    <h5>General Questions:</h5>

                    <div>
                        <ul className="radio-list horizontal clear-bottom-margin" id="focus-jdps">
                            <p><b>Are you a member of FOCUS Engine Controls or JDPS Engine
                                Engineering?</b></p>
                            <li><input type="radio" name="focus_member" describe="JDPS/FOCUS Member"
                                       value="Yes"
                                       id={"svn_show"}
                            />
                                <label></label>
                                <div
                                    id={"svn_show"}
                                >Yes
                                </div>
                            </li>
                            <li><input type="radio" name="focus_member" describe="Not in JDPS/FOCUS"
                                       value="No"
                                       defaultChecked
                                       id={"svn_hide"}
                            />
                                <label>
                                </label>
                                <div
                                    id={"svn_hide"}
                                >No
                                </div>
                            </li>
                            <li id="svnaccess" style={{display:'none'}}><input type="checkbox"
                                                                               id="svn_access"
                                                                               value="Needs Repository Access"/><label></label>
                                <div className="check-label">I need FOCUS SVN Repository Access</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <br/>
                        <p htmlFor="business_unit"><b>Using the drop down list, select you business
                            unit/location.</b></p>
                        <select type="dropdown" name="business_unit" id="businessunit" required>
                            <option disabled hidden defaultValue='' />
                            <option value="Other/Not Listed">Other/Not Listed</option>
                            <option value="Custom Performance (JDCP)">Custom Performance (JDCP)</option>
                            <option value="Drivetrain Operations">Drivetrain Operations</option>
                            <option value="Dubuque Works">Dubuque Works</option>
                            <option value="Electronic Solutions (JDES)">Electronic Solutions</option>
                            <option value="Engine Works">Engine Works</option>
                            <option value="Foundry Operations">Foundry Operations</option>
                            <option value="Harvester Works">Harvester Works</option>
                            <option value="Intelligent Solutions Group (ISG)">Intelligent Solutions
                                Group (ISG)
                            </option>
                            <option value="Product Engineering Center (PEC)">Product Engineering Center
                                (PEC)
                            </option>
                            <option value="Technology Center-India (TCI)">Technology Center-India
                                (TCI)
                            </option>
                            <option value="Tractor, Cab, and Assy. Ops. (TCAO)">Tractor, Cab, and Assy.
                                Ops. (TCAO)
                            </option>
                            <option value="Argentina S.A.">Argentina S.A.</option>
                            <option value="Brazil Ltda.">Brazil Ltda.</option>
                            <option value="Cary">Cary</option>
                            <option value="Coffeyville Works Inc.">Coffeyville Works Inc.</option>
                            <option value="Construction & Forestry Company">Construction & Forestry
                                Company
                            </option>
                            <option value="Cylinder Internal Platform">Cylinder Internal Platform
                            </option>
                            <option value="Davenport Works">Davenport Works</option>
                            <option value="Deere-Hitachi">Deere-Hitachi</option>
                            <option value="Des Moines Works">Des Moines Works</option>
                            <option value="Financial">Financial</option>
                            <option value="Forestry Ltd.">Forestry Ltd.</option>
                            <option value="GambH & Co. KG">GambH & Co. KG</option>
                            <option value="Horicon Works">Horicon Works</option>
                            <option value="India Pvt. Ltd.">India Pvt. Ltd.</option>
                            <option value="Intelligent Vehicle Systems">Intelligent Vehicle Systems
                            </option>
                            <option value="Mannheim">Mannheim</option>
                            <option value="Olathe">Olathe</option>
                            <option value="Ottumwa Works">Ottumwa Works</option>
                            <option value="Paton">Paton</option>
                            <option value="Reman">Reman</option>
                            <option value="Rosario">Rosario</option>
                            <option value="Seeding Group">Seeding Group</option>
                            <option value="Silvis">Silvis</option>
                            <option value="Thibodaux">Thibodaux</option>
                            <option value="Tianjin">Tianjin</option>
                            <option value="Usine d'Arc-les-Gray">Usine d'Arc-les-Gray</option>
                            <option value="Usine Saran">Usine Saran</option>
                            <option value="World Headquarters">World Headquarters</option>
                            <option value="Zweibruecken">Zweibruecken</option>
                        </select>
                    </div>

                    <div>
                        <br/>
                        <p><b>What group are you in and what type of work do you do?</b></p>
                        <textarea id="group_description" name="group_description" style={{height:'5em'}}
                                  required/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DepartmentInfo;
