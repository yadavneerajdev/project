import React from 'react'
import styled from 'styled-components'

export default function Loader() {

    const StyleLoader= styled.div`
        .suraj{
            background:black;

        }
        .sachin{
            background:red;
        }
    `;

  return (

<StyleLoader class="loader">
 loading..........
</StyleLoader>
  )
}
