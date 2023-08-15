import axios from 'axios';


export async function getPhotos(searchQuery: string) {

    try {
        console.log(process.env.PIXABAY_API_KEY)
        console.log(searchQuery)
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '38852294-a16d44303892127c1807de7e2',
            q: searchQuery,
            per_page: 100,
          },
        });
        return response;
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }

}