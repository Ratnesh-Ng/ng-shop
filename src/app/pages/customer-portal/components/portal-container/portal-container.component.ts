import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-portal-container',
  templateUrl: './portal-container.component.html',
  styleUrl: './portal-container.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PortalContainerComponent {
  public heading = input("");
}
