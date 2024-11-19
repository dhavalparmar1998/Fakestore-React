import React, { memo } from 'react'

 function Child11() {
    console.log("child component called", Math.random());
  return (
    <div>Child11</div>
  )
}
export default memo(Child11);

// unnecessary rerendering of child component is prevented by using memo in functional component.
