import React, { useState } from "react";

const Cars = () => {
  const [carList, setCarList] = useState([
    { brandname: 'Kia', carsize: 'small', carmodel: 'Picanto', carseats: '5', extras: '122', year: '2019', color: 'White', priceperday: '250' },
    { brandname: 'Toyota', carsize: 'small', carmodel: 'Yaris', carseats: '5', extras: '117', year: '2020', color: 'Red', priceperday: '150' },
    { brandname: 'Honda', carsize: 'SUV', carmodel: 'CRV', carseats: '5', extras: '135', year: '2017', color: 'Silver', priceperday: '200' },
    { brandname: 'Ford', carsize: 'SUV', carmodel: 'EcoSport', carseats: '5', extras: '167', year: '2021', color: 'White', priceperday: '300' },
    { brandname: 'Nissan', carsize: 'Large', carmodel: 'Patrol', carseats: '7', extras: '750', year: '2022', color: 'White', priceperday: '400' },
    { brandname: 'Land Rover', carsize: 'Premium', carmodel: 'Range Rover', carseats: '7', extras: '1800', year: '2022', color: 'Black', priceperday: '700' },
    { brandname: 'Chevrolet', carsize: 'Small', carmodel: 'Malibu', carseats: '5', extras: '205', year: '2016', color: 'Gold', priceperday: '100' },
    { brandname: 'Lexus', carsize: 'Large', carmodel: 'GX', carseats: '7', extras: '780', year: '2021', color: 'Silver', priceperday: '700' },
    { brandname: 'Mercedes', carsize: 'Premium', carmodel: 'Maybach', carseats: '4', extras: '4000', year: '2023', color: 'White', priceperday: '3500' },
  ]);

  return (
    <div>
      <table border={'3px'}>
        <tr>
          <td>Brand Name</td>
          <td>Car Size</td>
          <td>Car Model</td>
          <td>Car Seats</td>
          <td>Extras</td>
          <td>Year</td>
          <td>Color</td>
          <td>PricePerDay</td>
          <td>Car Picture</td>
        </tr>
        {carList.map((a, index) => (
          <tr key={index}>
            <td>{a.brandname}</td>
            <td>{a.carsize}</td>
            <td>{a.carmodel}</td>
            <td>{a.carseats}</td>
            <td>{a.extras}</td>
            <td>{a.year}</td>
            <td>{a.color}</td>
            <td>{a.priceperday}</td>
            <td>{a.carpicture}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Cars;
