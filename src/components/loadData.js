import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
export default function LoadData() {
  const postData = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("name", "Hassan");
      bodyFormData.append("lastName", "Khan");
      bodyFormData.append('image', "imageFile"); 
      const response = await axios.post("/user", bodyFormData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="d-flex mt-4 p-4 justify-content-between">
      <Button
        onClick={() => {
          fetchData();
        }}
      >
        Fetch data from server
      </Button>
      <Button
        onClick={() => {
          postData();
        }}
      >
        Send post data to server
      </Button>
    </div>
  );
}
