export interface HomeItemModel {
  id?: string;
  communityId?: string;
  price?: number;
  area?: number;
  type?: string;
}

export interface HomeModel {
  data?: HomeItemModel[];
}

export class Home {
  public props: HomeModel = {};

  constructor(data?: HomeModel) {
    if (data) {
      this.props = data;
    }
  }

  getHomeList(): HomeItemModel[] {
    return this.props.data || [];
  }
}
