import { useEffect } from "react"

export default function HeartsBackground() {
  useEffect(() => {
    const criarCoracao = () => {
      const coracao = document.createElement("span")
      coracao.textContent = "❤"
      coracao.className =
        "absolute text-pink-400 opacity-60 animate-float pointer-events-none select-none"
      coracao.style.left = Math.random() * 100 + "vw"
      coracao.style.fontSize = Math.random() * 20 + 10 + "px"
      coracao.style.animationDuration = Math.random() * 3 + 4 + "s"

      document.body.appendChild(coracao)

      setTimeout(() => coracao.remove(), 7000)
    }

    const intervalo = setInterval(criarCoracao, 1000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <style>
      {`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-200px) scale(0.8);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
          position: fixed;
          bottom: 0;
          z-index: 0;
        }
      `}
    </style>
  )
}
