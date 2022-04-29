import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  send = {
    id: 1,
    createdAt: new Date(),
    state: false,
    title: ""
  }
  title: any

  constructor(private _http: RestService) { }

  ngOnInit(): void {
  }
  
  sendApi() {
    this._http.post('todos', this.send).subscribe(response => {
      try {
        location.reload()
        window.alert("se agrego una nueva tarea");
      } catch (error) {
        console.log(error);
      }
    })

  }

}
