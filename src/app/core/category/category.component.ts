import { Component, OnInit } from '@angular/core';
import { MenuDetailsService } from '../../shared/menu-details/menu-details.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  public menuDetails: any = {};

  constructor(
    private menuService: MenuDetailsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.menuService.MenuDetails.subscribe((menuDetails) => {
      this.menuDetails =  menuDetails;
    });
  }
}
