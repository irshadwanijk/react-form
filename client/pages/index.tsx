import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import { errMessages, details } from "../data/data";
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const [userDetails, setUserDetails] = useState({
    domicile: "",
    scholarshipCat: "",
    schemeType: "",
    stdName: "",
    gender: "",
    dob: "",
    mobNumber: "",
    email: "",
    IFSC: "",
    confirmIFSC: "",
    accNumber: "",
    confirmAccNumber: "",
    identification: "",
  });
  function onInput(newValue: string, id: string) {
    // Saving the user input in the userDetails state.
    console.log("NewValue : ", newValue);
    // console.log("state value: ", userDetails[id as keyof typeof userDetails]);
    const prevUserDetails = { ...userDetails };
    prevUserDetails[id as keyof typeof userDetails] =
      newValue !== "Choose your option" ? newValue : "";
    setUserDetails(prevUserDetails);
  }
  function errorMessage(id: string) {
    const ele = document.getElementById(id);
    const err: string = errMessages[id as keyof typeof errMessages];
    if (ele !== null && !userDetails[id as keyof typeof userDetails]) {
      ele.innerHTML = err;
    }
  }
  function onRegister() {
    for (let i in userDetails) {
      console.log(userDetails[i as keyof typeof userDetails]);
    }
  }
  function everyValueEntered() {
    for (let i in userDetails) {
      if (i === "") {
        return false;
      }
    }
    return true;
  }

  // if (everyValueEntered()) {
  //   axios
  //     .post("http://localhost:30001/register", userDetails)
  //     .then((res) => {
  //       const resData = res.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>React Form</title>
        <meta
          name="description"
          content="Just a small project about react form"
        />
      </Head>

      <div className="App">
        <div>
          <div>
            {" "}
            <h2 className="form-heading">
              Fresh Registration For Academic year 2021-22
            </h2>
          </div>
          <div className="react-form">
            {details.map((obj, index) => {
              return (
                <div key={index}>
                  {obj.inputs?.map((input, index) => {
                    return (
                      <div key={index}>
                        <label> {input.label}</label> <span>* </span>
                        <input
                          // key={input.label}
                          value={
                            userDetails[input.unqId as keyof typeof userDetails]
                          }
                          onChange={(e) => {
                            e.preventDefault();
                            onInput(e.target.value, input.unqId);
                          }}
                          onBlur={() => {
                            errorMessage(input.unqId);
                          }}
                        />
                        <span id={input.unqId}>
                          {userDetails[input.unqId as keyof typeof userDetails]
                            ? ""
                            : null}
                        </span>
                      </div>
                    );
                  })}
                  {obj.select?.map((sel) => {
                    return (
                      <div key={sel.label}>
                        <label> {sel.label}</label>
                        <select
                          onBlur={() => {
                            errorMessage(sel.unqId);
                          }}
                          onChange={(e) => {
                            e.preventDefault();
                            onInput(e.target.value, sel.unqId);
                          }}
                        >
                          {sel.options.map((opt) => {
                            return <option key={opt}> {opt}</option>;
                          })}
                        </select>
                        <div>
                          <span id={sel.unqId}>
                            {userDetails[sel.unqId as keyof typeof userDetails]
                              ? ""
                              : null}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="register">
          <button className="register-btn" onClick={onRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
