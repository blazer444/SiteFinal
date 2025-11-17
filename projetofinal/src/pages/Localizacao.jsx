import React from 'react'

function Localizacao() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-lime-600 to-green-400 min-h-screen">
      <div className="p-2 bg-white border-4 border-green-700 rounded-2xl shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4443.799945856257!2d-47.4014326925767!3d-20.51542965452771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b93c4b5f%3A0xbe0e42f3aa42525c!2sFatec%20Franca%20-%20Faculdade%20de%20Tecnologia%20de%20Franca%20Dr%20Thomaz%20Novelino!5e0!3m2!1spt-BR!2sbr!4v1763336956512!5m2!1spt-BR!2sbr"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Localizacao
