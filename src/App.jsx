import React, { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.scss';
import './scss/app.scss';

import Nav from "./components/Nav";
import Category from "./components/Category";

export default function App() {

  const navLinks = [
    {
      id: 1,
      icon: <i className="bi bi-house-door"/>,
      content: 'Home',
    },
    {
      id: 2,
      icon: <i className="bi bi-envelope" />,
      content: 'Inbox'
    },
    {
      id: 3,
      icon: <i className="bi bi-person" />,
      content: 'Profile'
    },
  ];

  const [mainNavLinks, setMainNavLinks] = useState(navLinks);

  const [viewCategory, setViewCategory] = useState(null);

  useEffect(() => {
    
    if (viewCategory) {
      const selectedCategory = mainNavLinks.find(link => link.id === viewCategory.id);
      setViewCategory(() => selectedCategory);
    }
  }, [mainNavLinks]);

  const updateNavLinks = (navLinks) => {
    setMainNavLinks(() => navLinks);
  }

  const updateViewCategory = (id) => {
    const selectedCategory = mainNavLinks.find(link => link.id === id);
    setViewCategory(() => selectedCategory);
  }

  return (
    <div className="app">
      <Nav links={mainNavLinks} onSetUpdateLinks={updateNavLinks} onSetUpdateViewCategory={updateViewCategory}/>
      {viewCategory && <Category category={viewCategory}/>}
    </div>
  );
}