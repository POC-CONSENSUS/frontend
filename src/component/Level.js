import React from 'react';

export default function LevelPicker({ levels, label, change }) {

  return (
    <fieldset>
      <legend>{label}</legend>
      <div onChange={change}>
        <input type="radio" id="0" name="level" value="" />
        <label htmlFor="0">no level</label>
      </div>
      {levels.map((item, key) => {
        return (
          <div key={item.id} onChange={change}>
            <input type="radio" id={item.id} name="level" value={item.description} />
            <label htmlFor={item.level}>{item.level}:{item.description}</label>
          </div>
        )
      })}
    </fieldset>
  );
}
