import React from 'react';
import Hello from '../../components/hello/hello';

export default {
    title: 'Hello Story',
    component: Hello
  }

  export function Hello_World() {
    return (
      <Hello name={'Daniyal'} />
    )
  }