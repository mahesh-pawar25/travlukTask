import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/header/header.service';
import { MenuDetailsService } from '../../shared/menu-details/menu-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public data: any;
  
  constructor(
    private service: HeaderService,
    private menuService: MenuDetailsService,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.getNavBarData();
  }
  
  getNavBarData() {
    this.service.getNavBarList().subscribe({
      next: (res:any) => {
        this.data = res?.data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  goToDetails(menu:any) {
    this.menuService.setMenuDetails(menu);
    this.router.navigate(['/core/category']);
  }

}
