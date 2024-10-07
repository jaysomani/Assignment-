import React from 'react';

export default function StatCard({ title, count, extraInfo }) {
  return (
    <div className='stat-card'>
      <span className='stat-title'>{title}</span>
      <span className='stat-count'>{count}</span>
      <span className='stat-extra'>{extraInfo}</span>
    </div>
  );
}
