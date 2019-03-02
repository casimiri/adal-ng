import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adal-ng';

  constructor(private adalService: AdalService) {
    this.adalService.init(environment.config);
  }


}
