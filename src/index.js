import React from 'react';
import ReactDOM from 'react-dom/client';
import ApprovalCard from './ApprovalCard';
import  CommentDetail  from './CommentDetail';
import './index.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){

  const comments = [
    {
      name:'pranay',
      time: new Date(),
      comment: 'Mast Comment',
    },
    {
      name:'Gaurav',
      time: new Date(),
      comment: 'Mast Comment',
    },
    {
      name:'Isha',
      time: new Date(),
      comment: 'Mast Comment',
    }
  ];

  return (
    <div className='ui container comments'>
      <div className='ui cards'>
        <ApprovalCard>
        <CommentDetail  name='Pranay' comment="bohot hard!" time={new Date().getTime()}/>
        </ApprovalCard>
        <ApprovalCard>
          Are you sure you want to do this??
        </ApprovalCard>
      </div> 
    </div>
  );
}

root.render(<App/>);