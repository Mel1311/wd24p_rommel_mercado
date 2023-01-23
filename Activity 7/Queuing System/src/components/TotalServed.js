import './TotalServed.css';

const TotalServed = () => {
  return (
    <div className='TotalServedParentDiv'>
      <div className='TotalServedChildDiv'>
        <p className='TotalServedParagraph'>Total Served: 10</p>
      </div>
      <div className='TotalServedChildDiv'>
        <p className='TotalServedParagraph'>Total Served: 5</p>
      </div>
      <div className='TotalServedChildDiv'>
        <p className='TotalServedParagraph'>Total Served: 15</p>
      </div>
    </div>
  );
};

export default TotalServed;