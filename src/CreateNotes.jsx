import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNotes = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: '',
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const btNormal = () => {
    setExpand(false);
  };

  return (
    <div className='create_notes' onDoubleClick={btNormal}>
      <form>
        {expand ? (
          <input
            type='text'
            placeholder='Title'
            name='title'
            autoComplete='off'
            style={{ padding: '10px' }}
            onChange={InputEvent}
            value={note.title}
          />
        ) : null}
        <textarea
          rows=''
          column=' '
          name='content'
          placeholder='Write a note...'
          onClick={expandIt}
          className='txt_area'
          value={note.content}
          onChange={InputEvent}
        />
        {expand ? (
          <Button onClick={addEvent}>
            <AddIcon className='plus_sign' />
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNotes;
