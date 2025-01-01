import React from 'react';
import logo from './assets/ghlogo.png';

function CalculadoraParcelas() {
  const [valorCredito, setValorCredito] = React.useState(33698.60);
  const [parcela, setParcela] = React.useState(valorCredito / 84);

  const creditos = [
    33698.60,
    36290.80,
    38364.56,
    41475.20,
    46659.60,
    51844.00,
    57028.40,
    62212.80,
    67397.20,
    70000.00,
    75000.00,
    80000.00,
    84000.00,
    91356.04,
    97446.44,
    104506.60,
    114957.26,
    125407.92,
    135858.58,
    146309.24,
    156759.90,
    167210.56,
    177661.22,
    188111.88,
  ];

  const handleChange = (e) => {
    const novoValor = parseFloat(e.target.value);
    setValorCredito(novoValor);
    setParcela(novoValor / 84);
  };

  return (
    <div style={{
      fontFamily: 'Arial',
      margin: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#000', // Fundo preto
      color: '#F7DC6F', // Texto amarelo
      padding: 20,
      borderRadius: 10,
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={logo} 
        alt="Logo GH" 
        style={{
          marginBottom: 20, 
          width: '30%', 
          maxHeight: '50px', 
          objectFit: 'contain'
        }} 
      />
      <label style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
        Selecione o valor do crédito:
      </label>
      <select 
        value={valorCredito} 
        onChange={handleChange} 
        style={{
          width: '100%',
          height: 40,
          fontSize: 18,
          padding: 10,
          marginBottom: 20,
          border: '1px solid #F7DC6F', // Borda amarela
          borderRadius: 5,
          backgroundColor: '#333', // Fundo cinza-escuro
          color: '#F7DC6F' // Texto amarelo
        }}
      >
        {creditos.map((credito) => (
          <option key={credito} value={credito}>
            {credito.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </option>
        ))}
      </select>
      <div 
        id="resultado" 
        style={{
          fontSize: 36,
          fontWeight: 'bold',
          marginTop: 20,
          padding: 20,
          backgroundColor: '#333', // Fundo cinza-escuro
          borderRadius: 10,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          color: '#F7DC6F' // Texto amarelo
        }}
      >
        Valor da Parcela: R$ {parcela.toFixed(2)}
      </div>
	 
	 
    </div>
	
	

  );
  

}



export default CalculadoraParcelas;
