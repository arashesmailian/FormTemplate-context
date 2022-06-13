import React, { useContext } from "react";
import { JsonDataContext } from "../context/JsonDataContext";

const ContextForm = () => {
  const { jsonDatas, dispatch } = useContext(JsonDataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(jsonDatas));
  };
  return (
    <div>
      <h1>FormTemplate-context</h1>
      <form onSubmit={handleSubmit}>
        {jsonDatas.map((data) => {
          return (
            <div key={data.id}>
              <label>{data.title}</label>
              <input
                type="text"
                value={data.value}
                onChange={(e) => {
                  dispatch({
                    type: "UPDATE",
                    payload: { id: data.id, value: e.target.value },
                  });
                }}
                required
              />
            </div>
          );
        })}
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContextForm;
