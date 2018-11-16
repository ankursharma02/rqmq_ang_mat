import {Component} from '@angular/core';
import{NgModule} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component(
    {
        selector:"demo1-root",
        templateUrl:"./demo1.html",
        styleUrls:['demo1.css']

    }
)

export class  demo1 
{
    name:string="ankur sharma";
    id:number=101;
    arr=[{id:101,name:"ankur"},
        {id:102,name:"sharma"},
        {id:103,name:"abc"},
        {id:104,name:"xyz"},
        {id:105,name:"hello"},
        ]

        myControl = new FormControl();
        options: string[] = ['One', 'Two', 'Three','Four'];
        filteredOptions: Observable<string[]>;

        ngOnInit() {
          this.filteredOptions = this.myControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filter(value))
            );
        }
      
        private _filter(value: string): string[] {
          const filterValue = value.toLowerCase();
      
          return this.options.filter(option => option.toLowerCase().includes(filterValue));
        }

}