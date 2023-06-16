import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Holonet';
  products!: IProduct[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:7093/api/products?pageSize=50').subscribe((response) => {
      this.products = response.data;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
