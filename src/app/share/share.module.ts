import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule} from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        MatExpansionModule,
        MatDialogModule,
        MatIconModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FontAwesomeModule,
        ToastrModule.forRoot()
    ],
    exports: [
        HttpClientModule,
        MatExpansionModule,
        MatDialogModule,
        MatIconModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
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
