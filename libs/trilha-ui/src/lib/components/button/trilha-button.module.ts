import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrilhaButtonComponent } from './trilha-button.component';



@NgModule({
    declarations: [
        TrilhaButtonComponent
    ],
    exports: [
        TrilhaButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TrilhaButtonModule { }
