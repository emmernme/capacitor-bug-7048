import {Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";
import {SplashScreen} from "@capacitor/splash-screen";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    this.platform
        .ready()
        .then(async () => {
          await SplashScreen.hide();
        })
        .catch(async (e) => {
          console.error("Platform is not ready...", e);
          await SplashScreen.hide();
        });

  }
}
