import axios from 'axios';

class Youtube {
  constructor(key){
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params:{key: key},
    })

    // this.key = key;
    // this.getRequestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
  }

  async mostPopular(){
    const response = await this.youtube.get('search', {
      params:{
        part: 'snippet',
        maxResults: '25',
        type: 'video'
      }
    })
    return response.data.items;
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${this.key}`, this.requestOptions);
    // const result_1 = await response.json();
    // return result_1.items;
  }

  async search(query){
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: '25',
        q: query,
        type: 'video'
      }
    })
    return response.data.items;
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`, this.requestOptions);
    // const result_1 = await response.json();
    // return result_1.items;
    // // .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
  }

  async channel(channelID){
    const response = await this.youtube.get('channels', {
      params: {
        part: ['statistics', 'snippet'],
        id: channelID
      }
    })
    return response.data.items;
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=${channelID}&key=${this.key}`, this.requestOptions)
    // const result_1 = await response.json();
    // return result_1.items;
  }

  async videoInfo(videoID){
    const response = await this.youtube.get('videos', {
      params: {
        part: ['statistics', 'snippet'],
        id:videoID
      }
    })
    return response.data.items;
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoID}&key=${this.key}`, this.requestOptions)
    // const result_1 = await response.json();
    // return result_1.items;
  }

  async comments(videoId){
    const response = await this.youtube.get('commentThreads', {
      params: {
        part: 'snippet',
        order: 'relevance',
        videoId: videoId,
        maxResults: '25'
      }
    })
    return response.data.items;
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId=${videoId}&maxResults=25&key=${this.key}`, this.requestOptions)
    // const result_1 = await response.json();
    // return result_1.items;
  }
}

export default Youtube;