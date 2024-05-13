import React, { useState } from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import UserPhotos from "../UserPhotos";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const [showUserPhotos, setShowUserPhotos] = useState(false);

  const handleViewUserPhotos = () => {
    setShowUserPhotos(true);
  };

  const userModel = models.userModel(userId);
  console.log(userModel)
  return (
    <>
      <Typography variant="body1">
        <div>
          <div>First name : {userModel.first_name}</div>
          <div>Last name : {userModel.last_name}</div>
          <div>Location : {userModel.location}</div>
          <div>Desciption : {userModel.description}</div>
        </div>
      </Typography>
      <Link to={`/photos/${userId}`} onClick={handleViewUserPhotos}>
        View User Photos
      </Link>
    </>
  );
}

export default UserDetail;