import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="row">
      <h5>Footer</h5>

      <div class="row">
        <div class="col-6">

          <h5>Company Name</h5>
          <p> Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down.
            Nullizzle sapien velizzle, my shizz pimpin', shizzle my nizzle crocodizzle shut the shizzle up,
            gravida vizzle, dang.</p>

        </div>

      </div>
      <span class="created-by">Created with ♥ by <b><a href="https://akveo.com"
                                                       target="_blank">Akveo</a></b> 2019</span>
      <div class="socials">
        <a href="#" target="_blank" class="ion ion-social-github"></a>
        <a href="#" target="_blank" class="ion ion-social-facebook"></a>
        <a href="#" target="_blank" class="ion ion-social-twitter"></a>
        <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
      </div>
    </div>
  `,
})
export class FooterComponent {
}
