export class Article {
  public id: string;
  public title: string;
  public publishDate: Date;
  public text: string;
  public tags: Tag[];

  constructor(
    id: string,
    title: string,
    publishDate: Date,
    text: string,
    tags: Tag[]
  ) {
    this.id = id;
    this.title = title;
    this.publishDate = publishDate;
    this.text = text;
    this.tags = tags;
  }
}
