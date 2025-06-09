import React, { useEffect, useRef } from 'react'

const Preloader = ({ isVisible, onComplete }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const effectRef = useRef(null)

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create radial gradient
    let gradient = ctx.createRadialGradient(
      canvas.width / 2, 
      canvas.height / 2, 
      100, 
      canvas.width / 2, 
      canvas.height / 2, 
      canvas.width / 2
    )
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(0.6, 'cyan')
    gradient.addColorStop(1, 'magenta')

    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        this.x = x
        this.y = y
        this.text = ''
        this.fontSize = fontSize
        this.canvasHeight = canvasHeight
        this.characters = 'ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσ/ςΤτΥυΦφΧχΨψΩωABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789!@#$%^&*()_+{}|:"<>?`-=[],./\';'
      }

      draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
          this.y = 0
        } else {
          this.y++
        }
      }
    }

    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.fontSize = 25
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.initialize()
      }

      initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight)
        }
      }

      resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.initialize()
      }
    }

    const effect = new Effect(canvas.width, canvas.height)
    effectRef.current = effect

    let lastTime = 0
    const fps = 30
    const nextFrame = 1000 / fps
    let timer = 0

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime
      lastTime = timeStamp

      if (timer > nextFrame) {
        ctx.fillStyle = 'rgba(0,0,0,0.05)'
        ctx.textAlign = 'center'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = gradient
        ctx.font = effect.fontSize + 'px monospace'
        effect.symbols.forEach(symbol => symbol.draw(ctx))
        timer = 0
      } else {
        timer += deltaTime
      }

      if (isVisible) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      effect.resize(canvas.width, canvas.height)

      gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        100, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width / 2
      )
      gradient.addColorStop(0, 'red')
      gradient.addColorStop(0.6, 'cyan')
      gradient.addColorStop(1, 'magenta')
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  return (
    <div className="absolute inset-0 bg-black">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}

export default Preloader 