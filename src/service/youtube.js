import myInfo from '../myInfo.json'

class Youtube {
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular(){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${this.key}`, this.requestOptions);
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`, this.requestOptions);
    const result_1 = await response.json();
    return result_1.items;
    // .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
  }

}

export default Youtube;