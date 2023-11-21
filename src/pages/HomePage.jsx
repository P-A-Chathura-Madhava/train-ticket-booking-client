import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/availableTrains/${from}/${to}/${departure}/${returnDate}/${method}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <label className="mt-2">From :</label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="form-select mt-2"
          aria-label="Default select example"
        >
          <option defaultValue="select">Select a location</option>
          <option value="Colombo">Colombo</option>
          <option value="Kalutara">Kalutara</option>
          <option value="Kandy">Kandy</option>
        </select>
        <label className="mt-2">To :</label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="form-select mt-2"
          aria-label="Default select example"
        >
          <option defaultValue="select">Select a location</option>
          <option value="Horana">Horana</option>
          <option value="Galle">Galle</option>
          <option value="Piliyandala">Piliyandala</option>
        </select>
        <label>Departure Date :</label>
        <input
          onChange={(e) => setDeparture(e.target.value)}
          type="date"
          className=" mt-2"
        />
        <br />
        <label>Return Date :</label>
        <input
          onChange={(e) => setReturnDate(e.target.value)}
          type="date"
          className=" mt-2"
        />
        <br />
        <div>
          <label for="round">
          <input
            type="radio"
            name="method"
            onClick={() => setMethod("round")}
            value="round"
            id="round"
          />
          Round
          </label>
            <label for="oneWay">
            <input
            type="radio"
            name="method"
            onClick={() => setMethod("one way")}
            value="oneWay"
            id="oneWay"
          />
          One Way
            </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Order Ticket Now
        </button>
      </form>
    </div>
  );
};

export default HomePage;
