import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, AfterViewInit {

   // MatPaginator Inputs
   @Input() length: Number;
   @Output() getPaginationData = new EventEmitter<PageEvent>();

   @ViewChild(MatPaginator) paginator: MatPaginator;

   public pageSize: Number = 5;
   public pageSizeOptions: Array<Number> = [5, 10, 15];

   // MatPaginator Output
   public pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.getPaginationData.emit(this.pageEvent);
    });
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}
