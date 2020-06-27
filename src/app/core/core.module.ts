import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [ CommonModule, ShareModule ],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
    providers: [],
})
export class CoreModule {}
