import React, { createContext, useContext } from "react";
import Axios from "axios";
import FileDownload from "js-file-download";

const ResumeContext = createContext();

export const ContextProvider = ({ children }) => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "Resume.pdf");
    });
  };

  return (
    <ResumeContext.Provider value={{ download }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => useContext(ResumeContext);
