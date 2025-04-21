import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const EffectApi = () => {
    const [user, setUser] = useState();
      
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get(
    //           "https://jsonplaceholder.typicode.com/todos/1"
    //         );
    //         setUser(response.data);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

    useEffect(() => {
        datafetch();
      }, []);
    
      const datafetch = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  return (
    <div>
      {user ? (
        <div>
          <strong>ID:</strong> {user.id} <br />
          <strong>Title:</strong> {user.title} <br />
          <strong>Completed:</strong> {user.completed ? "Yes" : "No"}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default EffectApi
