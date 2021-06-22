import myInfo from '../myInfo.json'

class Youtube {
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${this.key}`, this.requestOptions)
    .then(response => response.json())
    .then(result => result.items);
  }

  search(query){
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`, this.requestOptions)
    .then(response => response.json())
    .then(result => result.items);
    // .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
  }

}

export default Youtube;