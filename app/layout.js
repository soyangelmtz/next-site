import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar.jsx'
import './globals.css'
import Footer from '@/components/Footer.jsx'
import { ThemeModeScript } from 'flowbite-react'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Medford Clone',
  description: 'Made by Angel Mtz',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <ThemeModeScript />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      </head>



      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />








        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


      </body>

    </html>

  )
}
