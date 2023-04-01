import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const JamEdit = () => {
  const [jam, updateJam] = useState({
    jamName: "",
    venueName: "",
    imageUrl: "",
    genreId: "",
    address: "",
    areaOfTownId: ""
  });

  const [ areas, updateArea ] = useState([]);
  const [ genres, updateGenre ] = useState([]);

  const { jamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8088/jams/${jamId}`)
      .then((response) => response.json())
      .then((data) => {
        updateJam(data);
      });
  }, [jamId]);

  useEffect(() => {
    fetch("http://localhost:8088/genres")
      .then((res) => res.json())
      .then((typeData) => {
        updateGenre(typeData);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8088/areasOfTown")
      .then((res) => res.json())
      .then((typeData) => {
        updateArea(typeData);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    return (
      fetch(`http://localhost:8088/jams/${jam.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jam),
      })
        .then((response) => response.json())
        .then(() => {
          navigate("/");
        })
    );
  };

  return (
    <form className="GearForm">
      <h3 className="gearForm__title"></h3>
      <div className="borderThis">
      <div className="insideBorderTwo">
      <fieldset className="smallerFieldSet">
        <div className="form-group">
          <label htmlFor="name">Jam Name:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={jam.jamName}
            onChange={(event) => {
              const copy = { ...jam };
              copy.jamName = event.target.value;
              updateJam(copy);
            }}
          >
            {" "}
            {jam.jamName}{" "}
          </textarea>
        </div>
      </fieldset>
      <fieldset className="smallerFieldSet">
        <div className="form-group">
          <label htmlFor="name">Venue Name:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={jam.venueName}
            onChange={(event) => {
              const copy = { ...jam };
              copy.venueName = event.target.value;
              updateJam(copy);
            }}
          >
            {" "}
            {jam.venueName}{" "}
          </textarea>
        </div>
      </fieldset>
      <fieldset className="smallerFieldSet">
        <div className="form-group">
          <label htmlFor="imageUrl">Image:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={jam.imageUrl}
            onChange={(event) => {
              const copy = { ...jam };
              copy.imageUrl = event.target.value;
              updateJam(copy);
            }}
          >
            {" "}
            {jam.imageUrl}
          </textarea>
        </div>
      </fieldset>
      <fieldset className="smallerFieldSet">
        <div className="form-group">
          <label htmlFor="address">Adress:</label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            value={jam.address}
            onChange={(event) => {
              const copy = { ...jam };
              copy.address = event.target.value;
              updateJam(copy);
            }}
          >
            {jam.address}
          </textarea>
        </div>
      </fieldset>

      <fieldset className="smallerFieldSet" id="centerThis">
      <div className="form-group">
  <div className="typeLabel">Area Of Town: </div>
  {areas.map((areaObj) => {
    return (
      <div key={areaObj.id} className="radio">
        <label>
          <input
            type="radio"
            value={areaObj.id}
            checked={jam.areaOfTownId === areaObj.id}
            onChange={(event) => {
              const copy = { ...jam }
              copy.areaId = parseInt(event.target.value)
              updateJam(copy)
            }}
          />
          {areaObj.name}
        </label>
      </div>
    )
  })}
</div>
</fieldset>  


<fieldset className="smallerFieldSet" id="centerThis">
      <div className="form-group">
  <div className="typeLabel">Genre: </div>
  {genres.map((genreObj) => {
    return (
      <div key={genreObj.id} className="radio">
        <label>
          <input
            type="radio"
            value={genreObj.id}
            checked={jam.genreId === genreObj.id}
            onChange={(event) => {
              const copy = { ...jam}
              copy.genreId = parseInt(event.target.value)
              updateJam(copy)
            }}
          />
          {genreObj.name}
        </label>
      </div>
    )
  })}
</div>
</fieldset>  
      </div>
      </div>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary form-Btn"
      >
        Save Edits
      </button>
    </form>
  );
};