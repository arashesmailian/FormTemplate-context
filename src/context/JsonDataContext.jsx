import React, { createContext, useReducer } from "react";
import { jsonDataReducer } from "../reducers/jsonDataReducer";
import datas from "../datas.json";

export const JsonDataContext = createContext();
const JsonDataContextProvider = (props) => {
  const [jsonDatas, dispatch] = useReducer(jsonDataReducer, datas);
  return (
    <JsonDataContext.Provider value={{ jsonDatas, dispatch }}>
      {props.children}
    </JsonDataContext.Provider>
  );
};

export default JsonDataContextProvider;
