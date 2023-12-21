import { calculateAverage } from 'utils/helperFunctions';
import { Home } from './Home';

export interface CommunityItemModel {
  id: string;
  group?: string;
  imgUrl?: string;
  name?: string;
}

export interface CommunityModel {
  data?: CommunityItemModel[];
}

export class Community {
  public props: CommunityModel = {};

  constructor(data?: CommunityModel) {
    if (data) {
      this.props = data;
    }
  }

  getCommunityList(): CommunityItemModel[] {
    return this.props.data || [];
  }

  //CUSTOM METHODS

  getCommunityImageUrl(communityId: string): string {
    return (
      this.getCommunityList().find((community) => community.id === communityId)
        ?.imgUrl ?? ''
    );
  }

  getCommunityName(communityId: string): string {
    return (
      this.getCommunityList().find((community) => community.id === communityId)
        ?.name ?? ''
    );
  }

  getCommunityGroup(communityId: string): string {
    return (
      this.getCommunityList().find((community) => community.id === communityId)
        ?.group ?? ''
    );
  }

  getCommunityAveragePrice(communityId: string, home: Home): string {
    const relatedHomePrices = home
      .getHomeList()
      .filter((home) => home.communityId === communityId)
      .map((home) => home.price ?? 0);
    const average = calculateAverage(relatedHomePrices).toFixed();
    return average;
  }
}
