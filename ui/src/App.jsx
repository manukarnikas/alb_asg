import { useEffect, useState } from "react";
import { Alert } from "antd";
import HeaderComponent from "./components/header/header";
import FooterComponent from "./components/footer/footer";
import ContentComponent from "./components/content/content";
import axios from "axios";
import "./App.css";

function App() {
  const [listData, setListData] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);

  useEffect(()=>{
    getListData();
  },[]);

  const getListData = () => {
    const url = process.env.REACT_APP_BASE_URL;
    axios
      .get(`${url}/list`)
      .then(function (response) {
        setListData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addListItem = (listItem) => {
    const url = process.env.REACT_APP_BASE_URL;
    axios
      .post(`${url}/list`, {
        data: listItem,
      })
      .then(function (response) {
        let newListData = [...listData];
        newListData.push(response?.data)
        setListData(newListData);
        setSuccessAlert(true);
      })
      .catch(function (error) {
        console.error(error);
        setFailureAlert(true);
      });
  };

  return (
    <>
      <HeaderComponent />
      {successAlert.status ? (
        <Alert
          message={`Task added successfully!`}
          type="success"
          closable
          onClose={()=> setSuccessAlert(false)}
        />
      ) : null}
      {failureAlert.status ? (
        <Alert
          message={`Failed to add task!`}
          type="error"
          closable
          onClose={()=> setFailureAlert(false)}
        />
      ) : null}
      <ContentComponent listData={listData} addListItem={addListItem} />
      <FooterComponent />
    </>
  );
}

export default App;
