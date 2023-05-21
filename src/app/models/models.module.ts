export class ItemModel {
  constructor (
    public title: string
    , public subtitle: string
    , public description: string
    , public fullPrice: number
    , public discountPrice: number
    , public image: string
  ) {}
}