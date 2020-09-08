
import React from 'react';
import logo from './logo.svg';
import './style.css';

export const FileManager = () => {
    
    return (
        <div className="wraper">
            <div className="title_band cms_tbbg cms_tbfg ">
                <div className="title">
                    File Manager Configuration
                </div>
                <div className="save_cancel hide">
                    <button className="save_btn">Save</button>
                    <button className="cancel_btn">Cancel</button>
                </div>
            </div>

            <div className="wrap scroll ag cms_bg cms_fg">

                <div className="right_sec">
                <div className="img_box dark_theme">
                    <img
                        src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1560263785072.JPG" />
                </div>
            </div>
                <div className="left_sec cms_radchk">

                <div className="cms_name_theme hide">
                    <div className="input_row cms_nt">
                        <div className="input_box ">
                            <label>Notes</label>
                            <input type="text" value="File Manager" />
                        </div>
                        <div className="input_box input_box02 theme_color">
                            <label>Color Theme</label>
                            <select>
                                <option>Light</option>
                                <option selected>Dark</option>
                                <option>Custome...</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="con_box">
                    <div className="input_row">
                        <div className="input_box ">
                            <label>Configuration Type</label>
                            <ul className="config_type">
                                <li className="vt_box ftctrl_view_type" data-val="Upload">
                                    <i className="fa fa-cloud-upload"></i>
                                    <div className="txt">Uploader <br />Only </div>
                                </li>
                                <li className="vt_box ftctrl_view_type" data-val="View">
                                    <i className="fa fa-eye"></i>
                                    <div className="txt">Viewer <br />Only </div>
                                </li>
                                <li className="vt_box ftctrl_view_type" data-val="View-Upload">
                                    <i className="fa fa-adjust"></i>
                                    <div className="txt">Uploader+ <br />Viewer</div>
                                </li>
                            </ul>
                        </div>
                        <div className="input_box input_box02">

                            <div className="input_box03 transfertype">
                                <div className="input_radio">
                                    <input id="up_first" name="transfer_type" type="radio" className="with-font" value="sel"
                                        checked />
                                    <label htmlFor="up_first">Uploader First </label>
                                </div>
                                <div className="input_radio">
                                    <input id="view_first" name="transfer_type" type="radio" className="with-font"
                                        value="sel" checked />
                                    <label htmlFor="view_first">Viewer First</label>
                                </div>

                            </div>
                            <div className="input_box03 calltype">
                                <div className="input_checkbox">
                                    <input id="fmctrl_select" name="call_type" type="checkbox" className="with-font"
                                        value="sel" />
                                    <label htmlFor="fmctrl_select">Select </label>
                                </div>
                                <div className="input_checkbox">
                                    <input id="fmctrl_delete" name="call_type" type="checkbox" className="with-font"
                                        value="sel" />
                                    <label htmlFor="fmctrl_delete">Delete </label>
                                </div>
                                <div className="input_checkbox">
                                    <input id="s_img" name="call_type" type="checkbox" className="with-font" value="sel" />
                                    <label htmlFor="s_img">Secure Images </label>
                                </div>
                            </div>

                            <div className="manual_transfer hide">
                                <div className="input_box03">
                                    <label>Phone Number (Optional)</label>
                                    <input type="text" />
                                </div>
                            </div>

                        </div>
                    

                        <div className="input_row">
                        <div className="input_box ">
                            <label>Group</label>
                            <select id="fmctrl_group">

                            </select>
                            <div className="input_checkbox marT-10">
                                <input id="fmctrl_trigger" name="relavent_img" type="checkbox" className="with-font"
                                    value="sel" />
                                <label htmlFor="fmctrl_trigger">Only Relavant Images</label>
                            </div>

                        </div>
                        <div className="input_box input_box02">
                            <label>Notes</label>
                            <textarea id="notes"></textarea>
                        </div>
                    </div>
                        <div className="input_row">
                        <div className="input_box">
                            <label>Tags</label>
                            <ul className="select_list scroll" id="tags_list">
                                {/*<li>

                                    
                                    <div className="input_checkbox " style="">
                                        <input id="select_01" name="select" type="checkbox" className="with-font" value="">
                                        <label htmlFor="select_01">htmlForm</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="input_checkbox" style="">
                                        <input id="select_02" name="select" type="checkbox" className="with-font" value="">
                                        <label htmlFor="select_02">Carousel</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="input_checkbox" style="">
                                        <input id="select_03" name="select" type="checkbox" className="with-font" value="">
                                        <label htmlFor="select_03">Report</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="input_checkbox" style="">
                                        <input id="select_04" name="select" type="checkbox" className="with-font" value="">
                                        <label htmlFor="select_04">Email Template</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="input_checkbox" style="">
                                        <input id="select_05" name="select" type="checkbox" className="with-font" value="">
                                        <label htmlFor="select_05">Demo</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="input_checkbox" style="">
                                        <input id="select_06" name="select" type="checkbox" className="with-font" value="">
                                        <label htmlFor="select_06">Demo 02</label>
                                    </div>
                                </li>*/}
                            </ul>
                        </div>
                        <div className="input_box input_box02 ">
                            <div className="range_slider01 max_connect">
                                <label>Max Concurrent Connections</label>
                                <select id="fmctrl_max_con_conn">
                                    <option value="DEFAULT" className="selected">Select an Option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="half_width file_size">
                                <label>Max File Size (in KB)</label>
                                <select id="fmctrl_max_file_size">
                                    <option value="DEFAULT" className="selected">Select an Option</option>
                                    <option value="102400">100Kb</option>
                                    <option value="204800">200Kb</option>
                                    <option value="512000">500Kb</option>
                                </select>
                            </div>
                        </div>


                    </div>

                    </div>
                    <div className="con_box">
                    <div className="input_row">
                        <div className="input_box">
                            <label>Files Types</label>
                            <select id="fmctrl_file_ext" className="multiple selectpicker" data-live-search="true">
                                <option value="*">All</option>
                                <option value=".txt">.txt</option>
                                <option value=".csv">.csv</option>
                                <option value=".jpg">.jpg</option>
                                <option value=".jpeg">.jpeg</option>
                                <option value=".gif">.gif</option>
                                <option value=".png">.png</option>
                                <option value=".mp3">.mp3</option>

                                <option value=".wav">.wav</option>
                            </select>
                        </div>
                    </div>
                    <div className="input_row file_types hide">
                        <div className="col">
                            <div className="input_checkbox disable_check">
                                <input id="ft_01" name="file_type" type="checkbox" className="with-font" value="sel" checked
                                    disabled />
                                <label htmlFor="ft_01">All </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input_checkbox">
                                <input id="ft_02" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_02"> TXT </label>
                            </div>
                            <div className="input_checkbox">
                                <input id="ft_03" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_03">JPEG </label>
                            </div>
                            <div className="input_checkbox">
                                <input id="ft_04" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_04">PDF </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input_checkbox">
                                <input id="ft_05" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_05">CSV </label>
                            </div>
                            <div className="input_checkbox">
                                <input id="ft_06" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_06">GIF </label>
                            </div>
                            <div className="input_checkbox">
                                <input id="ft_07" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_07">PNG </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input_checkbox">
                                <input id="ft_08" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_08">JPG </label>
                            </div>
                            <div className="input_checkbox">
                                <input id="ft_09" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_09">MP3 </label>
                            </div>
                            <div className="input_checkbox">
                                <input id="ft_10" name="file_type" type="checkbox" className="with-font" value="sel"
                                    checked />
                                <label htmlFor="ft_10">WAV </label>
                            </div>
                        </div>
                    </div>
                </div>


                </div>

            </div>

            </div>
        </div>
    );
}

export default FileManager;