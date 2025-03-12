import React, { useState } from "react"; // importa react e o hook usestart
//componetente que exibe o botão para buscar a data e hora
const FetchButton = () => {
  const [data, setData] = useState(null); // estado para armazernar os dados obtidos
  const [loading, setLoading] = useState(false); //estado para indicar se os dados estão sendo carregados

  const fetchData = () => { //função que obtém a data e hora atual ao clicar no botão
    setLoading(true); //define o estado do carregamento como verdadeiro
    
    setTimeout(() => { //simula tempo de carregamento 
      const now = new Date(); //obtém a data e hora atual
      const data = now.toLocaleDateString("pt-BR"); //formata a data no padrão brasileiro
      const hora = now.toLocaleTimeString("pt-BR"); //formata a hora no padrão brasileiro

      setData({ // atualiza o estado com data e hora formatada
        title: "Data e Hora Atual",
        body: `${data} ${hora}`,
      });
 
      setLoading(false); // define o status do carregamento como falso
    },1000); //aguarda 1 seg, antes de exibir os dados
  };
    
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Botão Fetch</h1>
 {/* Botão que aciona a função fetchData */}
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Carregando..." : "Buscar Dados"} 
      </button>
      {/* Exibe os dados apenas se existir um valor no estado data */}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};
// Exporta o componente para ser utilizado em outros arquivos
export default FetchButton;