import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/404-not-found-10402406-8403172.png" alt="404 Page not found" />
        <Link to='/' >Go to Home</Link>
    </div>
  )
}

export default NotFoundPage