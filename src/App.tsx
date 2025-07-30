function App() {
  const date = new Date().toLocaleString();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 DevOps Vite App</h1>
      <p>This page was last built on:</p>
      <h2>{date}</h2>
    </div>
  );
}

export default App;
