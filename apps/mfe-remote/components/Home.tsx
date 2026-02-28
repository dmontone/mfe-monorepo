const Home = () => (
  <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg m-4">
    <h2 className="text-2xl font-bold mb-4">HELLO REMOTE WORLD</h2>
    
    <div className="space-y-4">
      {/* Card com estilo secundário */}
      <div className="bg-secondary text-secondary-foreground p-4 rounded-md">
        <h3 className="font-semibold mb-2">Card Secundário</h3>
        <p className="text-sm">Este card usa as cores secundárias compartilhadas</p>
      </div>
      
      {/* Card com estilo terciário */}
      <div className="bg-tertiary text-tertiary-foreground p-4 rounded-md border">
        <h3 className="font-semibold mb-2">Card Terciário</h3>
        <p className="text-sm">Este card usa as cores terciárias com borda</p>
        
        {/* Botão de exemplo */}
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded mt-3 hover:opacity-80 transition-opacity">
          Botão MFE
        </button>
      </div>
      
      {/* Lista de itens */}
      <div className="bg-muted text-muted-foreground p-4 rounded-md">
        <h4 className="font-medium mb-2">Características do MFE:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Estilos compartilhados com shell</li>
          <li>Cores whitelabel via CSS variables</li>
          <li>Compatível com design system</li>
          <li>Carregamento dinâmico via Module Federation</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Home
