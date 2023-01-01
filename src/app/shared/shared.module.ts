import { PrecioPipe } from './pipes/precio.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent, PrecioPipe],
  imports: [CommonModule],
  exports: [LoadingComponent, PrecioPipe],
})
export class SharedModule {}
