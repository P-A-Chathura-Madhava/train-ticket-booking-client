import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AvailableTrains = () => {
  const { from, to, departure, returnDate, method } = useParams();

  const navigate = useNavigate();
    const [trainClass, setTrainClass] = useState('');

    const bookTrain = () => {
        navigate(`/bookingDetails/${from}/${to}/${departure}/${returnDate}/${method}/${trainClass}`);
    }


  return (
    <div className="container">
      <h1>Available Trains</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Train No.</th>
            <th scope="col">Train Name</th>
            <th scope="col">Time</th>
            <th scope="col">Cost</th>
            <th scope="col">Class</th>
            <th scope="col">Book</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1234</th>
            <td>{from} Express</td>
            <td>04.30 AM</td>
            <td>Rs 200.00</td>
            <td>
              <select
                //   value={from}
                  onChange={(e) => setTrainClass(e.target.value)}
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option defaultValue="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </td>
            <td>
              <button onClick={()=>bookTrain()} type="button" className="btn btn-info">
                Book Now
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">1342</th>
            <td>{to} Express</td>
            <td>10.15 AM</td>
            <td>Rs 250.00</td>
            <td>
              <select
                //   value={from}
                  onChange={(e) => setTrainClass(e.target.value)}
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option defaultValue="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </td>
            <td>
              <button onClick={()=>bookTrain()} type="button" className="btn btn-info">
                Book Now
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">4563</th>
            <td>{from} Passenger</td>
            <td>15.50 PM</td>
            <td>Rs 300.00</td>
            <td>
              <select
                //   value={from}
                  onChange={(e) => setTrainClass(e.target.value)}
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option defaultValue="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </td>
            <td>
              <button onClick={()=>bookTrain()} type="button" className="btn btn-info">
                Book Now
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2464</th>
            <td>{to} Passenger</td>
            <td>21.30 PM</td>
            <td>Rs 350.00</td>
            <td>
              <select
                //   value={from}
                  onChange={(e) => setTrainClass(e.target.value)}
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option defaultValue="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </td>
            <td>
              <button onClick={()=>bookTrain()} type="button" className="btn btn-info">
                Book Now
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2464</th>
            <td>
              {from} - {to} Super fast train
            </td>
            <td>23.15 PM</td>
            <td>Rs 500.00</td>
            <td>
              <select
                //   value={from}
                  onChange={(e) => setTrainClass(e.target.value)}
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option defaultValue="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </td>
            <td>
              <button onClick={()=>bookTrain()} type="button" className="btn btn-info">
                Book Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AvailableTrains;
