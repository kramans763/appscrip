import React from 'react';
import Image from 'next/image';

const Sidebar = ({ data, onCategoryClick ,selectedCategory }) => {
    
    const categories = [...new Set(data.map(product => product.category))];

    return (
        <div className="sidebar">
            <div className='sidebar-top' onClick={() => onCategoryClick('all')}>
                <h3>All Products</h3>
            </div>
            <div className="sidebar-filters">
                {categories.map((category) => (
                    <div className={`sidebar-filter ${category === selectedCategory ? 'selected' : ''}`} 
                    onClick={() => onCategoryClick(category)}>
                        <div className="sidebar-filter-top" >
                            <p>{category}</p>
                            <Image src="/assets/arrow-down.png" alt="arrow" width={15} height={15} />
                        </div>
                        <p>ALL</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
