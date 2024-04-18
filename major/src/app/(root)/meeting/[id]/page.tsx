import React from 'react'

function Meeting({params}: {params:{ id: string}}) {
  return (
    <div>
      meeting room : #{params.id}
    </div>
  )
}

export default Meeting
