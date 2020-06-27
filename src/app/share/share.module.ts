import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatDialogModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FontAwesomeModule
    ],
    exports: [
        MatExpansionModule,
        MatDialogModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FontAwesomeModule
    ],
    providers: [],
})
export class ShareModule {}
