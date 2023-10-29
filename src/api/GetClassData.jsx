import axios from 'axios';

export default async function GetClassData(token) {
  try {
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr/product/?limit=Number&skip=Number',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data;
    const filteredClasses = data.product.filter(classItem => classItem.author.accountname.includes('Teacher'));
    return filteredClasses;
    
  } catch (error) {
    console.error(error);
    return []
  }
}
