import React from 'react';
import logo from './logo.svg';
import './style.css';

export const Studio = () => {
    
  return (
    <>
        <div className="top_title_band">
            <div className="title">
            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1581437935337.SVG" className=""/>  
            <i className="fa fa-cog theme_fg_color hide"></i>
            <span>Chat Sender Configuration</span>
            </div>
            <div className="clearfix"></div>
        </div>
        <div className="wrap">
      <div className="wrap02 txt_speach">
          <div className="box_title">
              <div className="controlBox  ">
                  <label>Message Type</label>
                  <select className="msgType">
                      <option value="text">Text</option>
                      <option value="ki">Knowledge Item</option>
                      <option value="question">Question</option>
                      <option value="staticmsg">Static Messages</option>
                      <option value="livechat">Live Chat Agent</option>
                      <option value="multiselect">Multi-Select</option>
                  </select>
              </div>
              <div className="clearfix"></div>
              <div className="otherMsgBox controlBox">
                  <label>Chat Message</label>
                  <div className="insert_field" id="insert_field_element">
                      <i className="fa fa-plus-circle"></i>
                      <div className="text">Insert Field</div>
                  </div>
                  <div className="insert_field padR-10" id="insert_para">
                      <i className="fa fa-paragraph"></i>
                      <div className="text">Add Break</div>
                  </div>
                  <div className="insert_field_box addFields">
                      <div className="in_field_chk">
                          <input id="in_component" name="compcoll" type="radio" className="with-font" value="sel" />
                          <label htmlFor="in_component">Component</label>
                      </div>
                      <div className="in_field_chk">
                          <input id="in_collection" name="compcoll" type="radio" className="with-font" value="sel"/>
                          <label htmlFor="in_collection">Collection</label>
                      </div>
                      <div className="in_avail_field cmbComponent" style={{display:"block"}}>
                          <label>Available Fields</label>
                          <ul id="availableFields" className="available_files scroll">
                          </ul>
                      </div>
                      <div className="in_avail_field cmbCollection" style={{display:"none"}}>
                          <label>Available Fields</label>
                          <ul id="avlCollectionFields" className="available_files scroll">
                          </ul>
                      </div>
                  </div>
                  <textarea className="scroll" id="chatmessage" placeholder="Enter message text ..."></textarea>
                  <div className="clearfix"></div>
              </div>
          </div>
          <div className="clearfix"></div>
          <div className="controlBox QsMsgBox hide">
              <label>Regular Expression for Validation</label>
              <select id="cmbRegExp" className="selectpicker"></select>
          </div>
         
          <div className="controlBox kiMsgBox hide">
              <label>Knowledge Item Data</label>
              <select id="kiItemsData" className="selectpicker"></select>
          </div>
          <div className="controlBox stMsgBox hide">
              <label>Static Message Data</label>
              <select id="staticMsgData" className="selectpicker"></select>
          </div>
          <div className="controlBox liveChatBox hide">
              <label>Room Id</label>
              <select id="liveChatRoomId" className="selectpicker"></select>
          </div>
          <div className="clearfix"></div>
          <div className="box_title multiSelectBox hide">
              <div className="controlBox">
                  <label>Multi-Select Type</label>
                  <select className="selectpicker" id="stat_mstype">
                      <option value="dynamic">Dynamic</option>
                      <option value="static">Static</option>
                  </select>
              </div>
              <div className="clearfix"></div>
              <div className="dynamicOptionBox">
                  <div className="controlBox ">
                      <label>Id Field</label>
                      <select className="selectpicker" id="fldSelector"></select>
                  </div>
                  <div className="controlBox ">
                      <label>Value Field</label>
                      <select className="selectpicker" id="fldValue"></select>
                  </div>
                  <div className="clearfix"></div>
                  <div className="controlBox ">
                      <label>Data Collection Name</label>
                      <select id="gcDataResp" className="selectpicker"></select>
                  </div>
              </div>
              <div className="staticOptionBox hide ">
                  <div className="clearfix"></div>
                  <div className="controlBox">
                      <label>Message Option</label>
                      <input type="text" max = "50" className="textBox input_msg inpStaticMsg"/>
                      <button className="studio_btn primary btnStaticMsg marT-15"><i className="fa fa-plus"></i> Add</button>
                      <div className="clearfix"></div>
                      <div className="static_msg_option marT-10">
                          <div className="msg_res_lbl">
                              <div className="lbl">Messages(s)</div>
                          </div>
                          <div className="msg_res_list" id="dvStaticMsgs"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="clearfix"></div>
  </div>
    </>
  );
}

export default Studio;
