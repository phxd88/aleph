import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "al-url-picker",
  styleUrl: "al-url-picker.css",
  shadow: true
})
export class AlUrlPicker {
  @Event() onUrlChanged: EventEmitter;

  @Prop({ mutable: true }) urls: Map<string, string> | null = null;
  @Prop({ mutable: true }) url: string | null = null;

  private _input: HTMLInputElement;

  render(): JSX.Element {
    if (this.urls) {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <ion-select
            value={this.url}
            interface="popover"
            placeholder=""
            onIonChange={e => this.onUrlChanged.emit(e.detail.value)}
          >
            {[...this.urls].map(([url, title]) => {
              return <ion-select-option value={url}>{title}</ion-select-option>;
            })}
          </ion-select>
          <ion-input
            type="url"
            placeholder="src"
            required
            value={this.url}
            ref={el => (this._input = el)}
          />
          <ion-button
            size="small"
            type="submit"
            onClick={() => this.onUrlChanged.emit(this._input.value)}
          >
            <ion-icon name="refresh" />
          </ion-button>
        </form>
      );
    }
    return null;
  }
}