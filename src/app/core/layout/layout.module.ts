import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, ContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ],
  exports: [HeaderComponent, SidebarComponent, ContainerComponent]
})
export class LayoutModule {
}
