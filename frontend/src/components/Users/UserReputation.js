import React from "react";
import "../../assets/Style/userReputations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
              {/* <div className="user-list-cell">
                <img src={profile} alt="Profil" />
              </div> */}
              <div className="user-identity">
              <h1 style={{textTransform: 'capitalize'}}>{user.name}</h1>
                <div className="user-card">
                  <div className="user-icon">
                    {user.identity_card === "yes" ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </div>
                  <p className="identity-info">
                    Carte professionnelle et carte d'identité
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <div className="user-cell ">
              <p> <span> Prénom: </span> {user.first_name}</p>
              <p> <span> Position: </span> {user.user_position}</p>
              <p> <span> Site: </span> {user.site}</p>
            </div>
            <div className="user-cell ">
              <p> <span> Contrôleur: </span> {user.controller}</p>
              <p> <span> Date: </span> {user.date}</p>
              <p> <span> Heure: </span> {user.time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-question">
        <div className="condition-questions">
          <div className="condition-equipment">
            <h2 className="question-heading">État de l'équipement</h2>
            <Question
              label="1. Contrôleur de ronde"
              value={roundController}
              onChange={setRoundController}
            />
          </div>
          <div className="condition-Workstation">
            <h2 className="question-heading">État de la station de travail</h2>
            <div className="cleanlinessandstorage">
              <Question
                label="1. Propreté de la station de travail"
                value={cleanlinessWorkstation}
                onChange={setCleanlinessWorkstation}
              />
              <Question
                label="2. Stockage des matériaux et des documents"
                value={storageDocuments}
                onChange={setStorageDocuments}
              />
            </div>
          </div>
        </div>
        <div className="performance-questions">
          <h2 className="question-heading">Attitudes, performance et tenue</h2>

          <div className="attitudes-performance-attire">
            <Question
              label="1. Tenue vestimentaire"
              value={dressCode}
              onChange={setDressCode}
            />
            <Question
              label="2. Comportement sur site"
              value={onsiteBehaviour}
              onChange={setOnsiteBehaviour}
            />
            <Question
              label="3. Ponctualité (début et fin de service)"
              value={punctuality}
              onChange={setPunctuality}
            />
            <Question
              label="4. Réactivité"
              value={reactivity}
              onChange={setReactivity}
            />
            <Question
              label="5. Langue"
              value={userLanguage}
              onChange={setUserLanguage}
            />
          </div>
        </div>
        <div className="operational-questions">
          <div className="Operating-documents">
            <h2 className="question-heading">Documents d'exploitation</h2>

            <div className="electronicandreport">
              <Question
                label="1. Rampe électronique et/ou papier"
                value={electronicPaperhandrail}
                onChange={setElectronicPaperhandrail}
              />
              <Question
                label="2. Rapports de ronde"
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
          <p>Observations de l'utilisateur: {user.observations}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReputation;