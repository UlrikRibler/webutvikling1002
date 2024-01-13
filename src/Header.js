import React from 'react';
import './Header.css'; // Make sure the CSS file is correctly referenced

function Header() {
  const categories = [
    { name: 'Pet friendly', icon: '/pet.svg' },
    { name: 'Resort', icon: '/resort.svg' },
    { name: 'Hot tub', icon: '/hot-tub.svg' },
    { name: 'Ocean view', icon: '/ocean.svg' },
    { name: 'Cabin', icon: '/cabin.svg' },
    { name: 'Family friendly', icon: '/family.svg' },
    { name: 'Villa', icon: '/resort.svg' },
    { name: 'Pool', icon: '/pool.svg' },
    { name: 'Chalet', icon: '/chalet.svg' },
    { name: 'House-boat', icon: '/house.svg' },
    { name: 'Spa', icon: '/spa.svg' },
    { name: 'All inclusive', icon: '/all-inclusive.svg' }
  ];

  return (
    <div className="header">
      <div className="categories-section">
        <div className="category-buttons">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <div className="category-icon">
                <img src={category.icon} alt={category.name} />
              </div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
