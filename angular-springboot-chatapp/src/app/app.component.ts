import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-chat-app';

  webSocketAPI!: WebSocketAPI;
  greeting = "";
  name = "";

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name);
    this.name = "";
  }

  handleMessage(message: any){
    console.log(message.split('"')[4]);
  }

}