import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { environment } from 'src/environments/environment';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  constructor() {
    if (environment.production) {
      Sentry.init({
        dsn: 'https://54d5c9467d1448b2878c5071e547e1b6@sentry.io/1770322'
      });
    }
  }

  handleError(error: any) {
    if (environment.production) {
      Sentry.captureException(error.originalError || error);
    }
    console.error(error);
  }
}
