import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  const hotelRooms = [
    {
      name: 'Hotel Paradise',
      location: 'Oslo, Norway',
      reviewScore: 8.5,
      imageUrl: '/pic1.jpeg' // Assuming pic1.jpeg is directly in the public folder
    },
    {
      name: 'Cozy Cabin',
      location: 'Bergen, Norway',
      reviewScore: 9.3,
      imageUrl: '/pic2.jpeg' // Replace 'pic2.png' with the actual image name
    },
    {
      name: 'Beitostølen',
      location: 'Bergen, Norway',
      reviewScore: 8.7,
      imageUrl: '/pic3.jpeg' // Replace 'pic2.png' with the actual image name
    },
    {
      name: 'Caribien',
      location: 'Palo Alto, USA',
      reviewScore: 9.3,
      imageUrl: '/pic4.jpeg' // Replace 'pic2.png' with the actual image name
    },
    {
      name: 'Small Aparment',
      location: 'Los, Angelos',
      reviewScore: 7.1,
      imageUrl: '/pic5.jpeg' // Replace 'pic2.png' with the actual image name
    },
    // Add more hotel rooms as needed
  ];

  return (
    <div className="features-section">
      <div className="hotel-rooms">
        {hotelRooms.map((room, index) => (
          <div className="hotel-room" key={index}>
            <img src={room.imageUrl} alt={room.name} className="hotel-room-image" />
            <div className="hotel-room-info">
              <h2>{room.name}</h2>
              <p>{room.location}</p>
              <p>Score: {room.reviewScore}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
