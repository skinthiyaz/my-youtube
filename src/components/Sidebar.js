import React, { use } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // early return
    if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
         <ul>
        <li><Link>Home</Link></li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>
        <h1 className='font-bold  pt-5'>
            subscriptions
        </h1>
      <ul>
        <li>msuic</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
        <li>trailes</li>
      </ul>
       <h1 className='font-bold pt-5'>
            watch Later
        </h1>
      <ul>
        <li>msuic</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
        <li>trailes</li>
      </ul>
    </div>
  )
}

export default Sidebar
