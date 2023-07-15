import { Injectable } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';

interface IDialogContext<Data, Component> {
  data: Data;
  component: ComponentType<Component>;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: Dialog) {}

  open<Data, Component>(
    context: IDialogContext<Data, Component>
  ): DialogRef<string> {
    return this.dialog.open<string>(context.component, {
      width: '250px',
      panelClass: 'panel-class',
      data: context,
    });
  }
}
