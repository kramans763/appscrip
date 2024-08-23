import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from './Sidebar';
import Card from './Card';


const Main = ({ productData }) => {
    const [data, setData] = useState(productData);
    console.log("data",data);
    const [isSidebarHidden, setSidebarHidden] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredData, setFilteredData] = useState(productData);

    useEffect(() => {
        const updatedData = selectedCategory === 'all' 
            ? data 
            : data.filter(product => product.category === selectedCategory);
        setFilteredData(updatedData);
    }, [selectedCategory, data]);

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
    };

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
      };

      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSort = (type) => {
        let sortedData;
        if (type === 'lowToHigh') {
            sortedData = [...filteredData].sort((a, b) => a.price - b.price);
        } else if (type === 'highToLow') {
            sortedData = [...filteredData].sort((a, b) => b.price - a.price);
        } else if (type === 'rating') {
            sortedData = [...filteredData].sort((a, b) => b.rating.rate - a.rating.rate);
        }
        setFilteredData(sortedData);
        setPopupVisible(false); 
    };
    return (
        <div className="home">
            <div className="home-top">
                <div className="home-top-left">
                     <h5>{filteredData.length} ITEMS</h5>
                    <div className="filter" onClick={toggleSidebar}>
                        <Image src="/assets/arrow-left1.png" alt="arrow" width={16} height={16} />
                        <p>{isSidebarHidden ? 'SHOW FILTER' : 'HIDE FILTER'}</p>
                        
                    </div>
                </div>
                <h3 className='filter-header'>FILTER</h3>
                <div className="home-top-right" onClick={togglePopup}>
                    <p>RECOMMENDED</p>
                    <Image src="/assets/arrow-down.png" alt="arrow" width={16} height={16} />
                    <div className={`popup ${isPopupVisible ? 'active' : ''}`}>
                       <p onClick={() => handleSort('lowToHigh')}>Low to High</p>
                       <p onClick={() => handleSort('highToLow')}>High to Low</p>   
                       <p onClick={() => handleSort('rating')}>Popular</p>
                    </div>
                </div>
            </div>
            <div className="home-body">
                <div className={`category ${isSidebarHidden ? 'hidden' : ''}`}>
                   <Sidebar data={data} onCategoryClick={handleCategoryClick}
                            selectedCategory={selectedCategory} 
                    />
                </div>
               
                <div className="content">
                   {filteredData.map(product => (
                      <Card  product={product} />
                   ))} 
                </div> 
            </div>
        </div>
    );
};

export default Main;
