/* 
    prvo instalacija ng add @angular/material

    grupisanje svih modula koji će se koristiti

    ! forme
    https://material.angular.io/components/form-field/api

    ! input polja
    https://material.angular.io/components/input/api

    ! dugme
    https://material.angular.io/components/button/api

    
*/

import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports:[MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule ],
    exports:[MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]

})
export class MaterialModule{}