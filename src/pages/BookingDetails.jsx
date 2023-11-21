import React from 'react'
import { Link, useParams } from 'react-router-dom';

const BookingDetails = () => {

  const { from, to, departure, returnDate, method, trainClass } = useParams();

  return (
    <div className='container'>
      <div>
      <h1>Booking Details</h1>
      <p>From : {from}</p>
      <p>To : {to}</p>
      <p>Departure Date : {departure}</p>
      <p>Return Date : {returnDate}</p>
      <p>Round / One Way : {method}</p>
      <p>Class : {trainClass}</p>
      </div>

      <form>
      <label>First Name : &nbsp;</label><input className='mb-2' type="text" /><br />
      <label>Last Name : &nbsp;</label><input className='mb-2' type="text" /><br />
      <label>NIC Number : &nbsp;</label><input className='mb-2' type="text" /><br />
      <label>Telephone Number : &nbsp;</label><input className='mb-2' type="text" /><br />
      <Link className="btn btn-info" to={`/checkout/${from}/${to}/${departure}/${returnDate}/${method}/${trainClass}`}>Purchase Ticket</Link>
      </form>
    </div>
  )
}

export default BookingDetails