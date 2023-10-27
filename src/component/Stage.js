import React from 'react';

export default function StagePicker({ stages, label, change }) {
  
  return (
    <fieldset>
      <legend>{label}</legend>
      <div >
            <input type="radio" id="0" name="stage" value="" onChange={change} />
            <label htmlFor="0">No stage</label>
          </div>
      {stages.map((item, key) => {
        return (
          <div key={item.id}>
            <input type="radio" id={item.id} name="stage" value={item.title} onChange={change} />
            <label htmlFor={item.title}>{item.title}</label>
          </div>
        )
      })}
    </fieldset>
  );
}
