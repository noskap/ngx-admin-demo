import {Component} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  public obs: Observable<number> = this.getTimer();
  public status = 'info';

  public start(): void {
    this.obs = this.getTimer();
  }

  private getTimer() {
    return timer(0, 25).pipe(tap((i) => {
      // console.log(i);
      if (i <= 25) {
        this.status = 'danger';
      } else if (i <= 50) {
        this.status = 'warning';
      } else if (i <= 75) {
        this.status = 'info';
      } else {
        this.status = 'success';
      }
    }), take(100));
  }

}
