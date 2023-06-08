import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ItemModel } from 'src/app/models/models.module';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  itemList: any = []
  filteredItemList: any = []

  items = [
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-350.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-350.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-350.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-350.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
    {
      title: 'Beck 350ml',
      subtitle: 'Subtitle 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      fullPrice: 9.99,
      discountPrice: 8.99,
      image: 'assets/beck-330.jpg'
    },
  ];


  ngOnInit(): void {
    this.itemList = this.filteredItemList = this.items
  }

  constructor() {
    this.formGroup.controls.searchBar.valueChanges.subscribe(searchText => {
      if(searchText) {
        this.filteredItemList = this.itemList.filter((item: ItemModel) => {
          return item.title.toLowerCase().includes(searchText.toLowerCase())
        })
      } else if (searchText?.length === 0){
        this.filteredItemList = this.itemList
      }
    })
  }

  formGroup = new FormGroup({
    searchBar: new FormControl('')
  })
}
