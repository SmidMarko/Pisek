import { Component, Input } from '@angular/core';
import { delay } from 'rxjs/operators';
import { UserSessionService } from 'src/app/shared/services/user-session.service';
import { LocaleService } from '../../services/localeService';

@Component({
  selector: 'alg-top-right-controls',
  templateUrl: './top-right-controls.component.html',
  styleUrls: [ './top-right-controls.component.scss' ]
})
export class TopRightControlsComponent{

  @Input() drawLeftBorder = true;
  session$ = this.sessionService.session$.pipe(delay(0));
  readonly languages = this.localeService.languages;

  constructor(
    private sessionService: UserSessionService,
    private localeService: LocaleService,
  ) { 
    this.checkUserLogin();
  }

  login(): void {
    this.sessionService.login();
  }

  public checkUserLogin(){
    setTimeout(function(){ 
      // Check if local storage contains 'oauth_nonce' with a non-empty string value
      const oauthNonce = localStorage.getItem('oauth_nonce');
      if (oauthNonce && oauthNonce !== '') {
        // Check if the previous button exists on the page
        const button:any = document.querySelector('.alg-login-button');
        if (button) {
          // Check if 'force_login' value in local storage is set to 1
          const forceLogin = localStorage.getItem('force_login');
          console.log("Perform login", forceLogin);
          if (forceLogin !== '1') {
            // Simulate a click on the button
            if (button) {
              button.click();
              // Set 'force_login' value to 1 after the click is executed
              localStorage.setItem('force_login', '1');
            }
          }
        }
      }
    }, 150);
  }

}
