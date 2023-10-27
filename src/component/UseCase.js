import React, { useState } from 'react';

export default function UseCaseInput({ label, uniqueId, change }) {


  return (
    <fieldset>
      <legend>{label}</legend>
      <textarea maxlength="20" type="text" id={uniqueId} name={uniqueId} rows="5" cols="33" onChange={change}>

      </textarea>
    </fieldset>
  );
}
