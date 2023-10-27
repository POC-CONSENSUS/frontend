import React from 'react';

export default function Result({ label, uniqueId, value, change }) {

  return (
    <fieldset>
      <legend>{label}</legend>
      <input type='text' maxlength="44" disabled id={uniqueId} name={uniqueId} value={value} onChange={change} /><button onClick={() => { navigator.clipboard.writeText(value) }} type='button'>Copy!</button>
    </fieldset>
  );
}
