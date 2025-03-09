import { Component, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'sereni-button',
  styleUrl: 'sereni-button.scss',
  shadow: true,
})
export class SereniButton {
  @Event() sereniButtonClick: EventEmitter<null>;

  handleClick = () => {
    this.sereniButtonClick.emit();
  };

  render() {
    return (
      <div class="container" onClick={this.handleClick}>
        <slot></slot>
      </div>
    );
  }
}
