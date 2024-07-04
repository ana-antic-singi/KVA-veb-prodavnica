/* 
    prvo instalacija ng add @angular/material

    grupisanje svih modula koji će se koristiti

    ! forme
    https://material.angular.io/components/form-field/overview

    ! input polja
    https://material.angular.io/components/input/overview

    ! dugme
    https://material.angular.io/components/button/overview

    ! ikonica
    https://material.angular.io/components/icon/overview

    ! kalendar
    1. https://material.angular.io/components/datepicker/overview
    2. https://material.angular.io/components/datepicker/overview#choosing-a-date-implementation-and-date-format-settings

    ! checkbox
    https://material.angular.io/components/checkbox/overview

    ! side nav
    https://material.angular.io/components/sidenav/overview

    ! toolbar navigacija
    https://material.angular.io/components/toolbar/overview

    ! lista za nav meni
    https://material.angular.io/components/list/overview

    ! tabela
    https://material.angular.io/components/table/overview

    ! sort
    https://material.angular.io/components/sort/overview

    ! kartica
    https://material.angular.io/components/card/overview

    ! paginator
    https://material.angular.io/components/paginator/api

    ! select
    https://material.angular.io/components/select/overview

    ! chips
    https://material.angular.io/components/chips/overview


    
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
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports:[
        MatFormFieldModule, MatInputModule, MatButtonModule, 
        MatSidenavModule, MatToolbarModule, MatDatepickerModule, 
        MatNativeDateModule, MatIconModule, MatCheckboxModule, 
        MatListModule, MatTableModule, MatSortModule,
        MatCardModule, MatPaginator, MatSelectModule,
        MatChipsModule, MatDialogModule],
    exports:[
        MatFormFieldModule, MatInputModule, MatButtonModule, 
        MatSidenavModule, MatToolbarModule, MatDatepickerModule, 
        MatNativeDateModule, MatIconModule, MatCheckboxModule, 
        MatListModule, MatTableModule, MatSortModule,
        MatCardModule,MatPaginator, MatSelectModule,
        MatChipsModule, MatDialogModule ]

})
export class MaterialModule{}