import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = []
  dataFilter: any = []
  itemFilter: any = []
  id: string = ""
  constructor(private _http: RestService) { }

  ngOnInit() {
    this._http.get('todos').subscribe(response => {
      try {
        this.data = response;
      } catch (error) {
        console.log(error);
      }
    })
  }

  deleteItem(id: string) {
    this._http.delete('todos', id).subscribe(
      response => {
        try {
          location.reload()
          window.alert("se elimino una tarea");
        } catch (error) {
          console.log(error);

        }
      }
    )
  }
  filtroItem() {
    let idItme = this.id
    console.log(idItme);
    if (idItme == "") {
      location.reload()
    }
    this.dataFilter = this.data;
    const tmpFilter = this.dataFilter.filter((item: any) => item.id == idItme)
    this.data = tmpFilter
  }

  updateItem(item: any, state: boolean) {
    let id = item.id
    let title = item.title
    if (state == true) {
      let newUpdate = {
        id: 1,
        createdAt: new Date(),
        state: true,
        title: title
      }
      this._http.put('todos', id, newUpdate).subscribe(response => {
        try {
          location.reload()
          window.alert("Se completo la tarea");
        } catch (error) {
          console.log(error);

        }
      })
    } else {
      let newUpdate = {
        id: 1,
        createdAt: new Date(),
        state: false,
        title: title
      }
      this._http.put('todos', id, newUpdate).subscribe(response => {
        try {
          location.reload()
          window.alert("Ups parece que no has terminado tu tarea");
        } catch (error) {
          console.log(error);

        }
      })

    }



  }

}
