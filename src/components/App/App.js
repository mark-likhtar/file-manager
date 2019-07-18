import React, { useEffect } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import "./style.scss";
import Folder from "../Folder/Folder";

const App = () => {
  useEffect(() => {
    console.log(document.querySelectorAll('[data-toggle="tooltip"]'));
  }, []);

  return (
    <div className="container file-manager">
      <div className="row">
        <div className="header">
          <div className="pagination">
            <button className="btn">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="btn">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
          <div className="folder-tools">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>
                  Create folder
                </Tooltip>
              }
            >
              <Button variant="light">
                <i className="fas fa-folder-plus" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>
                  Upload
                </Tooltip>
              }
            >
              <Button variant="light">
                <i className="fas fa-upload" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>
                  Rename
                </Tooltip>
              }
            >
              <Button variant="light">
                <i className="fas fa-edit" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>
                  Delete
                </Tooltip>
              }
            >
              <Button variant="light">
                <i className="fas fa-trash-alt" />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
        <div className="folders" >
          <Folder/>
          <Folder/>
          <Folder/>
          </div>
      </div>
    </div>
  );
};

export { App };
