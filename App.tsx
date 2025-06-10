
import React from 'react';
import AppointmentScheduler from './components/AppointmentScheduler';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <header className="mb-10 text-center">
        {/* You can add a logo here if available */}
        {/* <img src="/logo.svg" alt="Onisaúde Logo" className="h-12 mx-auto mb-4" /> */}
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-700 dark:text-sky-400 drop-shadow-sm">
          Onisaúde Agendamentos
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
          Agende sua consulta ou exame de forma rápida e fácil.
        </p>
      </header>
      <main className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 md:p-10">
        <AppointmentScheduler />
      </main>
      <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Onisaúde. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
