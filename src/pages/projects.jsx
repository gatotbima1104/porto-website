import React from 'react'
import Glide from '@glidejs/glide'
import { FaBeer } from 'react-icons/fa'

new Glide('.glide').mount()

const Projects = () => {
  return (
    
      <div class="glide">
  <div data-glide-el="track" class="glide__track">
    <ul class="glide__slides">
      <li class="glide__slide">
        <img src={<FaBeer/>} />
      </li>
      <li class="glide__slide"></li>
      <li class="glide__slide"></li>
    </ul>
  </div>
</div>
    
  )
}

export default Projects
