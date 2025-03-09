import { Component, h, Prop } from '@stencil/core';
import { PositionEnum } from './entities';

@Component({
  tag: 'sereni-tooltip',
  styleUrl: 'sereni-tooltip.scss',
  shadow: true,
})
export class SereniTooltip {
  /*
    defines the position where the tooltip will be displayed
  */
  @Prop() position: PositionEnum = PositionEnum.BOTTOM;
  @Prop() arrow: boolean = false;
  @Prop() tooltipText: string;
  @Prop() tooltipTextColor: string = '#fff';
  @Prop() tooltipBgColor: string = '#333';

  render() {
    return (
      <div
        class={{
          container: true,
          [this.position]: true,
          arrow: this.arrow,
        }}
      >
        <slot name="trigger"></slot>
        <span class="tooltip" style={{ '--tooltip-text-color': this.tooltipTextColor, '--tooltip-bg-color': this.tooltipBgColor }}>
          {this.tooltipText || ''}
        </span>
      </div>
    );
  }
}
