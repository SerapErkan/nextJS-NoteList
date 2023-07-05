import { useState } from "react";

const addNote = () => {
  const [note, setNote] = useState([]);

  return (
    <>
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
    </>
  );
};

export default addNote;
