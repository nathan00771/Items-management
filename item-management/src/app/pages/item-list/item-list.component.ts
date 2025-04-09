import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';
import { ItemFormComponent } from '../../components/item-form/item-form.component';
import { materialImports } from '../../shared/material.module';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatSort) sort!: MatSort;

  searchText = '';

  constructor(private itemService: ItemService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Item, filter: string) => {
      const keyword = filter.trim().toLowerCase();
      return (
        data.name.toLowerCase().includes(keyword) ||
        data.type.toLowerCase().includes(keyword) ||
        data.category.toLowerCase().includes(keyword)
      );
    };
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.getItems().subscribe((data) => {
      const filtered = data.filter((item) => !item.isDeleted);
      this.dataSource.data = filtered;
    });
  }

  openForm(item?: Item) {
    const dialogRef = this.dialog.open(ItemFormComponent, { data: item });

    dialogRef.afterClosed().subscribe((result: Item | undefined) => {
      if (result) {
        this.fetchItems();
      }
    });
  }

  deleteItem(id: number) {
    this.itemService.softDelete(id).subscribe(() => {
      this.fetchItems();
    });
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
