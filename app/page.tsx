"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Youtube, MessageCircle, Camera, Mail, Share2, Play, ExternalLink, Zap, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function NefedoffWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@nefedoffth",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      description: "Основной канал",
    },
    {
      name: "VK Видео",
      url: "https://vk.com/video/@nefedoffth",
      icon: Play,
      color: "from-blue-500 to-blue-600",
      description: "Видеоконтент",
    },
    {
      name: "Дзен",
      url: "https://dzen.ru/nefedoffth",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      description: "Статьи и посты",
    },
    {
      name: "Telegram",
      url: "https://t.me/nefedoffth",
      icon: MessageCircle,
      color: "from-sky-500 to-sky-600",
      description: "Новости и анонсы",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/nefedoffth",
      icon: Camera,
      color: "from-pink-500 to-purple-600",
      description: "Фото и stories",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/nefedoffth",
      icon: Users,
      color: "from-blue-600 to-blue-700",
      description: "Сообщество",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header
          className={`text-center py-12 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full animate-spin opacity-75" />
                <div
                  className="absolute inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full animate-spin-reverse opacity-50"
                  style={{ animationDuration: "4s" }}
                />
                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/nefedoff-logo.png"
                    alt="NEFEDOFF TH Logo"
                    width={120}
                    height={120}
                    className="rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 animate-pulse"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-ping opacity-30" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight overflow-hidden">
              <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-bounce-text">
                N
              </span>
              <span
                className="inline-block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.1s" }}
              >
                E
              </span>
              <span
                className="inline-block bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.2s" }}
              >
                F
              </span>
              <span
                className="inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.3s" }}
              >
                E
              </span>
              <span
                className="inline-block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.4s" }}
              >
                D
              </span>
              <span
                className="inline-block bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.5s" }}
              >
                O
              </span>
              <span
                className="inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.6s" }}
              >
                F
              </span>
              <span
                className="inline-block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.7s" }}
              >
                F
              </span>
              <span className="inline-block mx-4"></span>
              <span
                className="inline-block bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.8s" }}
              >
                T
              </span>
              <span
                className="inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-bounce-text"
                style={{ animationDelay: "0.9s" }}
              >
                H
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <p className="text-xl md:text-2xl text-gray-300 font-light animate-fade-in-up">
                — это не блог. Это движение.
              </p>
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>

            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-white/10 text-white border-white/20 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              Контент-креатор • Блогер • Инфлюенсер
            </Badge>
          </div>
        </header>

        {/* Social Links */}
        <section
          className={`py-12 px-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Подписывайтесь на все платформы</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <Card
                  key={index}
                  className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <link.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">{link.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{link.description}</p>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 group-hover:shadow-lg transition-all duration-300"
                    >
                      <Link href={link.url} target="_blank" className="flex items-center gap-2">
                        Перейти
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & QR */}
        <section
          className={`py-12 px-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white mb-4">Сотрудничество</h3>
                  <p className="text-gray-300 mb-6">Готовы к совместным проектам? Напишите нам!</p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                  >
                    <Link href="mailto:promo@nefedoffth.com" className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      promo@nefedoffth.com
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* QR Code */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Share2 className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white mb-4">Поделиться</h3>
                  <p className="text-gray-300 mb-6">Отсканируй QR-код и поделись с друзьями</p>
                  <div className="w-48 h-48 mx-auto bg-white rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://vmaxth.github.io"
                      alt="QR code to vmaxth.github.io"
                      width={180}
                      height={180}
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Trailer */}
        <section
          className={`py-12 px-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Play className="w-8 h-8 text-red-500" />
              Трейлер канала
            </h2>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/UfOYxUH_138"
                    title="NEFEDOFF TH Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 mb-4">© 2024 NEFEDOFF TH. Все права защищены.</p>
            <p className="text-sm text-gray-500">Создано с ❤️ для лучшего контента</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
