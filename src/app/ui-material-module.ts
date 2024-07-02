/* 
    prvo instalacija ng add @angular/material

    grupisanje svih modula koji će se koristiti

    ! forme
    https://material.angular.io/components/form-field/api

    ! input polja
    https://material.angular.io/components/input/api

    ! dugme
    https://material.angular.io/components/button/api

    ! ikonica
    https://material.angular.io/components/icon/overview

    ! kalendar
    1. https://material.angular.io/components/datepicker/api
    2. https://material.angular.io/components/datepicker/overview#choosing-a-date-implementation-and-date-format-settings

    ! checkbox
    https://material.angular.io/components/checkbox/api

    ! side nav
    https://material.angular.io/components/sidenav/overview

    ! toolbar navigacija
    https://material.angular.io/components/toolbar/overview

    ! lista za nav meni
    https://material.angular.io/components/list/overview

    
*/

import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
@NgModule({
    imports:[
        MatFormFieldModule, MatInputModule, MatButtonModule, 
        MatSidenavModule, MatToolbarModule, MatDatepickerModule, 
        MatNativeDateModule, MatIconModule, MatCheckboxModule, 
        MatListModule, MatTableModule, MatSortModule,
        MatCardModule, MatPaginator, ],
    exports:[
        MatFormFieldModule, MatInputModule, MatButtonModule, 
        MatSidenavModule, MatToolbarModule, MatDatepickerModule, 
        MatNativeDateModule, MatIconModule, MatCheckboxModule, 
        MatListModule, MatTableModule, MatSortModule,
        MatCardModule,MatPaginator, ]

})
export class MaterialModule{}