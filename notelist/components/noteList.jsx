import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/styles/NoteList.module.css";

const NoteList = () => {
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState({
    total: 0,
    completed: 0,
    unCompleted: 0,
  });

  async function getAll() {
    const result = await axios.get("/api/notes/get");
    setList(result.data);
  }

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    setCounts();
  }, [list]);

  async function submit() {
    const data = {
      note: note,
    };
    const result = await axios.post("api/notes/add", data);
    setNote("");
    getAll();
  }

  function handleChange(e) {
    setNote(e.target.value);
    if (!e.target.validity.valid) {
      console.log("hatalı giriş");
    }
  }

  async function remove(value) {
    let result = confirm(`${value.note} kaydını silmek istiyor musunuz?`);
    if (result) {
      await axios.post("/api/notes/remove", value);
      getAll();
    }
  }

  async function changeStatus(value) {
    let result = confirm(
      `${value.note} kaydının durumunu değiştirmek istiyor musunuz?`
    );
    if (result) {
      await axios.post("/api/notes/changeStatus", {
        id: value._id,
        isCompleted: value.isCompleted,
      });
      getAll();
    }
  }

  function setCounts() {
    //  setCount(prev=> ({...prev ,["total"]:todos.length}));
    const completedCount = list.filter((f) => f.isCompleted === true).length;
    const unCompletedCount = list.filter((f) => f.isCompleted === false).length;

    setCount({
      total: list.length,
      completed: completedCount,
      unCompleted: unCompletedCount,
    });
  }

  return (
    <>
      <div className="container-sm">
        <div className="addForm">
          <form onSubmit={submit}>
            <input
              type="textarea"
              rows="4"
              cols="50"
              autoComplete="off"
              id="title"
              required
              minLength={3}
              value={note}
              onChange={handleChange}
              className="addInput"
              placeholder="Not ekle ..."
            />

            <button type="submit" className="addBtn">
              <i class="bx bx-edit-alt"></i>
            </button>
          </form>
        </div>

        <div className="row">
          {list.map((val, index) => {
            return (
              <div key={index} className="col">
                <div className="note">
                  {" "}
                  {index + 1}-{val.note}
                </div>

                <div className="btnGroup">
                  {" "}
                  <button className="btn check">
                    <i class="bx bx-message-minus"></i>
                  </button>
                  <button className="btn remove" onClick={() => remove(val)}>
                    <i class="bx bxs-message-x"></i>
                  </button>
                  <button
                    className="btn remove"
                    onClick={() => changeStatus(val)}
                  >
                    <i class="bx bx-message-alt-detail"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div>
          <h1>total: {count.total}</h1>
          <h1>completed: {count.completed}</h1>
          <h1>unCompleted: {count.unCompleted}</h1>
        </div>  */}
      </div>
    </>
  );
};

export default NoteList;
