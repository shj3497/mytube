class Youtube {
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular(){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=${this.key}`, this.requestOptions);
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=${this.key}`, this.requestOptions);
    const result_1 = await response.json();
    return result_1.items;
    // .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
  }

  async channel(channelID){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=${channelID}&key=${this.key}`, this.requestOptions)
    const result_1 = await response.json();
    return result_1.items;
  }

  async videoInfo(videoID){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoID}&key=${this.key}`, this.requestOptions)
    const result_1 = await response.json();
    return result_1.items;
  }

  async comments(videoId){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId=${videoId}&maxResults=25&key=${this.key}`, this.requestOptions)
    const result_1 = await response.json();
    return result_1.items;
  }
}

export default Youtube;