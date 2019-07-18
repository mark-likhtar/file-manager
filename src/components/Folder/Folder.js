import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const Folder = () => {
  const folderMenuRef = useRef();
  const [selected, setSelected] = useState(false);

  const setPosition = ({ top, left }) => {
    console.log(document.querySelector('show'))
      
    folderMenuRef.current.style.left = `${left}px`;
    folderMenuRef.current.style.top = `${top}px`;
    setSelected(true);
  };

  window.addEventListener("click", e => {
    if (selected) {
      setSelected(false);
    }
  });

  useEffect(()=> {
      console.log(folderMenuRef.current);
      
  })

  const showContextMenu = event => {
    event.preventDefault();
    const origin = {
      left: event.pageX,
      top: event.pageY
    };
    console.log(origin);
    
    setPosition(origin);
    return false;
  };

  return (
    <div
      className="folder"
      onContextMenu={showContextMenu}
    >
      <i className="fas fa-folder" />
      <span>filename</span>

      
        <div class={`folder-menu ${selected ? 'show' : ''}`}  ref={folderMenuRef}>
          <ul class="folder-menu-options">
            <li class="folder-menu-option">Back</li>
            <li class="folder-menu-option">Reload</li>
            <li class="folder-menu-option">Save</li>
            <li class="folder-menu-option">Save As</li>
            <li class="folder-menu-option">Inspect</li>
          </ul>
        </div>
      
    </div>
  );
};

export default Folder;
