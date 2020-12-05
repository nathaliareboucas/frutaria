import React, {useState} from 'react';

const AdicionaFruta = () => {

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(0);

  const adicionarFruta = event => {
    event.preventDefault();

    const fruta = {
      id: new Date(),
      nome,
      quantidade
    };

    alert('Adicionando fruta', fruta);
  };

  return (
    <form onSubmit={adicionarFruta}>        
      <input 
        type="text" 
        name="nome"
        placeholder="Fruta"
        required
        value={nome}
        onChange={event => setNome(event.target.value)}/>
      
      <input 
        type="number" 
        name="quantidade"
        placeholder="Quantidade"
        required
        value={quantidade}
        onChange={event => setQuantidade(event.target.value)}/>

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionaFruta;