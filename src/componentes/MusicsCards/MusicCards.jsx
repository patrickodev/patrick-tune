import React from 'react';
import "./MusicCards.css"

// Definindo o componente funcional MusicCard que recebe a prop 'prop'
function MusicCard(prop) {
  // Extração das propriedades 'previewUrl' e 'trackName' do objeto 'prop'
  const { previewUrl, trackName } = prop;

  // Retornando o JSX que representa o componente
  return (
    <div className='MusicsCards'> 
      {/* Checkbox para 'gostar' da música, por exemplo */}
      <input type="checkbox" name="like" id="like" />

      {/* Exibindo o nome da música */}
      <p>{trackName}</p>

      {/* Reprodutor de áudio usando a URL da pré-visualização da música */}
      <audio src={previewUrl} controls>
        {/* Configuração de legendas para o áudio (vazia neste caso) */}
        <track kind='captions' />

        {/* Mensagem de fallback caso o navegador não suporte o elemento <audio> */}
        O seu navegador não suporta o elemento
        {''}
        {''}
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

// Exportando o componente para que ele possa ser utilizado em outros lugares do código
export default MusicCard;
