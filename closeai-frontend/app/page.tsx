import { FileComparison } from '@/components/file-upload/file-comparison';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="neumorph p-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Close AI</h1>
          <p className="text-sm text-gray-300">Análisis de Transacciones</p>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <FileComparison />
        </div>
      </main>
      
      <footer className="neumorph p-4 mt-8">
        <div className="container mx-auto text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Close AI - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
