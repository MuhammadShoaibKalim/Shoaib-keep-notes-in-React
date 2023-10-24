import React, { useState } from 'react';
import Header from './Header';
import CreateNotes from './CreateNotes';
import Note from './Note';
import Footer from './Footer';

const App = () => {
  const [items, setItems] = useState([]);

  const addNote = (note) => {
    setItems((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setItems((olddata) => {
      return olddata.filter((currdata, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNotes passNote={addNote} />
      <div className="main_notes">
        {items.map((val, index) => (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
