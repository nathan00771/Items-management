import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { materialImports } from '../../shared/material.module';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ...materialImports,
  ],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  item: Item = { id: Date.now(), name: '', type: '', category: '', price: 0 };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    public dialogRef: MatDialogRef<ItemFormComponent>,
    private itemService: ItemService,
  ) {
    if (data) {
      this.item = { ...data };
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.data) {
        this.itemService.updateItem(this.item).subscribe((updatedItem) => {
          this.dialogRef.close(updatedItem); // Pass updated item
        });
      } else {
        this.itemService.addItem(this.item).subscribe((newItem) => {
          this.dialogRef.close(newItem); // Pass newly added item
        });
      }
    }
  }
  
}