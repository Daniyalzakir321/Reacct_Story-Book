import React, { useState } from 'react';
import SearchInput from '../../components/search/search';

export default {
    title: 'SearchInput',
    component: SearchInput
}

export function Search() {
    const [state, setstate] = useState('Search')
    return (
        <SearchInput
        // value={`search`} 
        // onChange={
        //     (e:any)=> {console.log(e.target.value) }
        //  } 
        />
    )
}