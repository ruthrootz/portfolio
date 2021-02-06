class Article {
    public title: string;
    public publishDate: Date;
    public text: string;
    public tags: Tag[];
  
    constructor(title: string, publishDate: Date, text: string, tags: Tag[]) {
      this.title = title;
      this.publishDate = publishDate;
      this.text = text;
      this.tags = tags;
    }

}
