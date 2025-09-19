import Image from 'next/image';
import Link from 'next/link';
import Projects from '@/components/Projects';
export default function Home() {
  const projects = [
    { id: 1, title: 'quiz app', viewUrl: "https://quizapp-phi-ten.vercel.app/", image: "/projects/quiz-app.png", github: "https://github.com/sanchitaborkar/quizapp" },
    { id: 2, title: 'To-do list app', viewUrl: "hthttps://to-do-app-psi-gray.vercel.app/tps://to-do-app-psi-gray.vercel.app/", image: "/projects/todo.png", github: "https://github.com/sanchitaborkar/to-do-app" },
    { id: 3, title: 'portfolio', viewUrl: '#', image: "/projects/portfolio.png" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-gray-100">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold">SB</div>
          <div>
            <h1 className="text-lg font-semibold">Sanchita Borkar</h1>
            <p className="text-xs text-gray-400">MERN Stack Developer</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="bg-indigo-600 px-3 py-2 rounded-md hover:opacity-90">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md border border-gray-700">Menu</button>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <div className="w-64 h-64 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl transform hover:scale-105 transition">
            <Image src="/sanchu.jpeg" alt="Sanchita Borkar" width={512} height={512} className="object-cover" />
          </div>
        </div>

        <div className="order-1 md:order-2 text-center md:text-left md:col-span-2">
          <p className="text-sm text-indigo-300 font-medium mb-2">Hello, I am</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Sanchita Borkar</h2>
          <p className="mt-4 text-gray-300 max-w-xl">MERN Stack developer building delightful UI and scalable web apps. I enjoy turning ideas into pixel-perfect, accessible products.</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg">View Projects</a>
            <a href="#contact" className="inline-block px-6 py-3 rounded-lg border border-gray-700 text-gray-200">Hire Me</a>
          </div>

          <div className="mt-8 flex gap-4 items-center text-sm text-gray-400 justify-center md:justify-start">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Location</span>
              <strong>Pune, Maharashtra</strong>
            </div>
            <div className="w-px h-8 bg-white/5 mx-2" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Email</span>
              <strong>sanchitaborkar412@gmail.com</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + SKILLS */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10 bg-white/3 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="mt-4 text-gray-200">I'm MERN Stack Developer who loves building clean and user-friendly web applications. Always learning and exploring new technologies to improve my skills.</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-400">HTML</p>
                <div className="mt-1 w-full bg-white/5 rounded-full h-3 overflow-hidden"><div className="h-3 rounded-full bg-indigo-500" style={{ width: '80%' }} /></div>
              </div>
              <div>
                <p className="text-xs text-gray-400">CSS</p>
                <div className="mt-1 w-full bg-white/5 rounded-full h-3 overflow-hidden"><div className="h-3 rounded-full bg-indigo-500" style={{ width: '70%' }} /></div>
              </div>
              <div>
                <p className="text-xs text-gray-400">JavaScript</p>
                <div className="mt-1 w-full bg-white/5 rounded-full h-3 overflow-hidden"><div className="h-3 rounded-full bg-indigo-500" style={{ width: '70%' }} /></div>
              </div>
              <div>
                <p className="text-xs text-gray-400">React</p>
                <div className="mt-1 w-full bg-white/5 rounded-full h-3 overflow-hidden"><div className="h-3 rounded-full bg-indigo-500" style={{ width: '65%' }} /></div>
              </div>
            </div>
          </div>

          <aside className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-sm text-gray-400">Quick Info</h4>
            <ul className="mt-4 text-sm text-gray-200 space-y-2">
              <li><strong>Age:</strong> 22</li>
              <li><strong>Degree:</strong> BBA(CA)</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
            <div className="mt-6">
              <a href="/Sanchita-borkar-MERN-stack-developer.pdf" target="_blank" className="block text-center px-3 py-2 bg-indigo-600 rounded-md">Download Resume</a>
            </div>
          </aside>
        </div>
      </section>

      {/* PROJECTS */}
      <Projects list={projects} />

      {/* RESUME */}
      <section id="resume" className="max-w-6xl mx-auto px-6 py-12 bg-white/3 rounded-2xl">
        <h3 className="text-2xl font-semibold">Experience & Education</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">MERN Stack Developer</h4>
            <p className="text-sm text-gray-300">Adnecto Technologies — Sep 2025 - Present</p>
            <ul className="mt-3 list-disc ml-5 text-gray-200">
              <li>Built responsive UI with React and Next.js</li>
              <li>Worked on performance and accessibility</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Education</h4>
            <p className="text-sm text-gray-300">BBA(CA) — Shardabai Pawar girls college shardanagr Baramati</p>
            <p className="mt-2 text-gray-200">Graduated June 2025</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Your Name</label>
              <input className="mt-1 w-full bg-white/3 rounded-md p-3 outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea className="mt-1 w-full bg-white/3 rounded-md p-3 h-32 outline-none" placeholder="Let's build something..." />
            </div>
            <a href="mailto:sanchitaborkar412@gmail.com?subject=Inquiry&body=" className="px-6 py-3 bg-indigo-600 rounded-md">
              Send Message
            </a>
          </form>

          <div className="p-6 rounded-xl bg-white/4 flex flex-col gap-4">
            <h4 className="font-semibold">Get in touch</h4>
            <p className="text-sm text-gray-300">Email: sanchitaborkar412@gmail.com</p>
            <div className="mt-4">
              <a href="/Sanchita-borkar-MERN-stack-developer.pdf" target="_blank" className="inline-block px-4 py-2 border rounded-md">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500">© {new Date().getFullYear()} Sanchita Borkar — Designed by Sanchita</footer>
    </main>
  );
}
