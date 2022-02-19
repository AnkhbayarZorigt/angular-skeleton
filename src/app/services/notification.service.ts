import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  subject = new Subject<string>();

  notify(message: string) {
    this.subject.next(message);
  }

  getNotification() {
    return this.subject.asObservable();
  }
}
