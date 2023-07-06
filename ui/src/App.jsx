import { useEffect, useState } from "react";
import HeaderComponent from "./components/header/header";
import FooterComponent from "./components/footer/footer";
import ContentComponent from "./components/content/content";
import axios from "axios";
import "./App.css";

function App() {
  const [listData, setListData] = useState([]);

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

  const deleteListItem = (id) => {
    const url = process.env.REACT_APP_BASE_URL;
    axios
      .delete(`${url}/list/${id}`)
      .then(function (response) {
        let newListData = [...listData];
        newListData = newListData.filter(item=> item._id !== id)
        setListData(newListData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  const addListItem = (listItem) => {
    const url = process.env.REACT_APP_BASE_URL;
    axios
      .post(`${url}/list`, {
        task: listItem,
      })
      .then(function (response) {
        let newListData = [...listData];
        newListData.push(response?.data)
        setListData(newListData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <HeaderComponent />
      <ContentComponent listData={listData} addListItem={addListItem} deleteListItem={deleteListItem} />
      <FooterComponent />
    </>
  );
}

export default App;
