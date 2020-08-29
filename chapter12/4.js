import React, { useRef, useCallback, useState } from ‘react‘;
import produce from ‘immer‘;


const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: “, username: “ });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });



// input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );
    },
    [form]
  );



// form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
        name: “,
        username: “
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );



// 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    [data]
  );



return (…);
};



export default App;