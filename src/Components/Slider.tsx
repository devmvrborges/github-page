import React, { ChangeEvent } from 'react';
import './SliderComponent.css'; // Importa o arquivo CSS

interface SliderComponentProps {
  initialValue: number; // Adiciona a propriedade initialValue ao tipo das props
}

interface SliderComponentState {
  value: number;
}

class SliderComponent extends React.Component<SliderComponentProps, SliderComponentState> {
  constructor(props: SliderComponentProps) {
    super(props);
    this.state = {
      value: props.initialValue, // Inicializa o valor com o valor passado nas props
    };
  }

  render() {
    const { value } = this.state;
    return (
        <div className="slider-container">
        <div className="slider-track">
          <div className="slider-filled" style={{ width: `${(value / 10) * 100}%` }}></div>
          <input
            type="range"
            min={0}
            max={10}
            value={value}
            onChange={this.handleSliderChange}
            disabled
            className="custom-slider"
          />
        </div>
      </div>
    );
  }

  handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Lida com a alteração do slider (mesmo que esteja desativado)
    // Se necessário fazer algo aqui, você pode adicionar sua lógica
    // Por exemplo, você pode querer armazenar o valor em algum lugar ou executar uma ação
  };
}

export default SliderComponent;
