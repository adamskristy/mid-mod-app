import { useParams } from "react-router-dom";
import Back from "./Back";

function VillagerDetails({ villagers }) {
  const { id } = useParams();
  //console.log(id)

  const findAnimalById = villagers.find((v) => {
    if (id.toString() === v.id.toString()) {
      return true;
    } else {
      return false;
    }
  });

  //console.log(findAnimalById)

  const villager = findAnimalById;

  return (
    villager && (
      <div className="container">
        <div
          className="container"
          style={{
            color: villager["text-color"],
            backgroundColor: villager["bubble-color"],
          }}
        >
          {/* <div className="is-flex is-justify-content-space-evenly pt-6 has-background-warning"></div> */}
          <div className="columns mt-6 p-6">
            <div className="image column">
              <img src={villager["image_uri"]} alt="villager"></img>
            </div>
            <div className="column is-two-thirds mr-6">
              <h2 className="is-size-3">Name: {villager.name["name-USen"]}</h2>
              <h3 className="is-size-3">
                Birthday: {villager["birthday-string"]}
              </h3>
              <h3 className="is-size-3">Species: {villager.species}</h3>
              <h3 className="is-size-3">Personality: {villager.personality}</h3>
              <h3 className="is-size-3">Hobby: {villager.hobby}</h3>
              <h3 className="is-size-3">
                Catch Phrase: {villager["catch-phrase"]}
              </h3>
              <h3 className="is-size-3">
                Saying: "<span className="is-italic">{villager.saying}</span>"
              </h3>
            </div>
          </div>
        </div>
        <Back />
      </div>
    )
  );
}

export default VillagerDetails;
