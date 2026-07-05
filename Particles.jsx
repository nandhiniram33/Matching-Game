import React, { useEffect } from 'react'

export default function Particles(){
  useEffect(()=>{
    const container = document.createElement('div')
    container.className = 'particles'
    for(let i=0;i<14;i++){
      const leaf = document.createElement('div')
      leaf.className = 'leaf'
      const left = Math.random()*100
      const size = 30 + Math.random()*80
      leaf.style.left = left + 'vw'
      leaf.style.width = size + 'px'
      leaf.style.height = size + 'px'
      leaf.style.animationDuration = (12 + Math.random()*12) + 's'
      leaf.style.top = (-Math.random()*20) + 'vh'
      leaf.style.opacity = 0.12 + Math.random()*0.18
      container.appendChild(leaf)
    }
    document.body.appendChild(container)
    return ()=> container.remove()
  },[])
  return null
}
