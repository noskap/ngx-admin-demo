import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `<!--<nb-layout-footer [fixed]="true">-->
  <div class="row">
    <h5>Footer</h5>

    <div class="row">

      <div class="col-6">

        <h6>Find Us</h6>

        <span>Address</span>
        <p>Suite A1, Ground Floor, 140 Bundall Road, Bundall QLD 4217, Australia</p>

        <span>Hours</span>
        <p>Monday—Thursday: 8:00AM–4:30PM</p>
        <p>Friday: 8:00AM-2:30PM</p>

        <span>Phone</span>
        <p>07 5609 8411</p>

        <span>Email</span>
        <p>info@inthecode.com.au </p>

      </div>

      <div class="col-6">
        <!--      <nb-layout>-->
        <!--        <nb-layout-column>-->

        <h5>IN THE CODE</h5>
        <p>We are In The Code, a software development company that prides itself on making the hard stuff, easier.
          Our skilled team works together to give you the unique service to gain that competitive advantage over your
          competitors, spend less time on mundane tasks, all while saving you on unnecessary business costs. We help
          businesses of all sizes solve everyday business problems with innovative technology and professional
          advice.</p>

        <!--        </nb-layout-column>-->
        <!--        <nb-layout-column></nb-layout-column>-->
        <!--      </nb-layout>-->
      </div>

    </div>
    <!--  </div>-->
    <!--  &lt;!&ndash;</nb-layout-footer>&ndash;&gt;-->
    <!--  <div class="row">-->
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2019</span>
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
