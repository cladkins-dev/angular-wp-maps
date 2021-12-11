import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {animate, state, style, transition, trigger} from '@angular/animations';



export interface Post {
  id: string;
  slug: object;
  status: string;
  title: string;
  date: string;
  content: string;
}


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class CustomTableComponent implements OnInit {
  api: string = "https://wordpress.org/news/wp-json/wp/v2/posts?per_page=20";
  columnsToDisplay: string[] = ['id', 'slug', 'status', 'title','date'];
  titles: string[] = ["id", "slug", "status", "title", "creation date","content"];
  searchText: string = "";
  dataSource: Post[] = [];
  expandedElement: null;
  console = console;
  


  
  
  constructor(private http: HttpClient) { 
    
  };

  isNumber(val:any): boolean { return typeof val === 'number'; }
  fixRendering(val:string): string{
    this.console.log(val);
    return val.replace("/&#8211;/gi","-");
  }


  ngOnInit(): void {
    this.http.get<Post[]>(this.api).subscribe(
      (res) => {
        this.console.log(res);
        this.dataSource=res;

      },
      (err) => console.error(err)
    );
  };

}
