import React from "react";
import "../../assets/Style/userReputations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import profile from "../../assets/Images/profile.png";
import { GoogleMaps } from "../common/GoogleMaps";
import { Question } from "../common/Question";

const UserReputation = ({ user }) => {
  const [roundController, setRoundController] = useState(user.round_controller);
  const [cleanlinessWorkstation, setCleanlinessWorkstation] = useState(
    user.cleanliness_workstation
  );
  const [storageDocuments, setStorageDocuments] = useState(
    user.storage_documents
  );
  const [dressCode, setDressCode] = useState(user.dress_code);
  const [onsiteBehaviour, setOnsiteBehaviour] = useState(user.onsite_behaviour);
  const [punctuality, setPunctuality] = useState(user.punctuality);
  const [reactivity, setReactivity] = useState(user.reactivity);
  const [userLanguage, setUserLanguage] = useState(user.user_language);
  const [electronicPaperhandrail, setElectronicPaperhandrail] = useState(
    user.electronic_paperhandrail
  );
  const [roundReports, setRoundReports] = useState(user.round_reports);

  return (
    <div className="user-info">
      <div className="user-reputation">
        {/* <h1>{user.name}'s Reputation</h1> */}
        <div className="user">
          <div className="user-cell profile-identity">
            <div className="user-profile">
              <div className="user-list-cell">
                <img src={profile} alt="Profile" />
              </div>
              <div className="user-identity">
                <p>{user.name}</p>
                <div className="user-card">
                  <div className="user-icon">
                    {user.identity_card === "yes" ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </div>
                  <p className="identity-info">
                    Professional Card and Identity Card
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <div className="user-cell ">
              <p>First Name: {user.first_name}</p>
              <p>Position: {user.user_position}</p>
              <p>Site: {user.site}</p>
            </div>
            <div className="user-cell ">
              <p>Controller: {user.controller}</p>
              <p>Date: {user.date}</p>
              <p>Time: {user.time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-question">
        <div className="condition-questions">
          <div className="condition-equipment">
            <h2 className="question-heading">Condition of the Equipment</h2>
            <Question
              label="1. Round controller"
              value={roundController}
              onChange={setRoundController}
            />
          </div>
          <div className="condition-Workstation">
            <h2 className="question-heading">Condition of the Workstation</h2>
            <div className="cleanlinessandstorage">
              <Question
                label="1. Cleanliness of the workstation"
                value={cleanlinessWorkstation}
                onChange={setCleanlinessWorkstation}
              />
              <Question
                label="2. Storage of materials and documents"
                value={storageDocuments}
                onChange={setStorageDocuments}
              />
            </div>
          </div>
        </div>
        <div className="performance-questions">
          <h2 className="question-heading">Attitudes, Performance & Attire</h2>

          <div className="attitudes-performance-attire">
            <Question
              label="1. Dress code"
              value={dressCode}
              onChange={setDressCode}
            />
            <Question
              label="2. On-site behavior"
              value={onsiteBehaviour}
              onChange={setOnsiteBehaviour}
            />
            <Question
              label="3. Punctuality (start and end of service)"
              value={punctuality}
              onChange={setPunctuality}
            />
            <Question
              label="4. Reactivity"
              value={reactivity}
              onChange={setReactivity}
            />
            <Question
              label="5. Language"
              value={userLanguage}
              onChange={setUserLanguage}
            />
          </div>
        </div>
        <div className="operational-questions">
          <div className="Operating-documents">
            <h2 className="question-heading">Operating documents</h2>

            <div className="electronicandreport">
              <Question
                label="1. Electronic and/or paper handrail"
                value={electronicPaperhandrail}
                onChange={setElectronicPaperhandrail}
              />
              <Question
                label="2. Round reports"
                value={roundReports}
                onChange={setRoundReports}
              />
            </div>
          </div>
          <div className="map">
            {/* {user.location} */}
            <GoogleMaps lat={user.user_lat} lng={user.user_long} />
          </div>
        </div>
        <div className="observation">
          <h2 className="question-heading">Observation</h2>
          <p>user.observations: {user.observations}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReputation;


