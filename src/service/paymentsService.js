import axios from "axios";

const savePayment = async (payment) => {
  console.log(payment.from, payment.to, payment.departure, payment.returnDate, payment.method, payment.trainClass);
  const response = await axios
    .post("http://localhost:5000/api/payments", {
      from: payment.from,
      to: payment.to,
      departure: payment.departure,
      trainReturn: payment.returnDate,
      method: payment.method,
      trainClass: payment.trainClass
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const paymentsService = { savePayment };

export default paymentsService;
