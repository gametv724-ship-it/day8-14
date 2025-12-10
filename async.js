/**function getUserData(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(user => {
      return fetch(`/api/users/${user.id}/posts`);
    })
    .then(response => response.json())
    .then(posts => {
      return fetch(`/api/users/${userId}/settings`);
    })
    .then(response => response.json())
    .then(settings => {
      return { user: userId, posts: posts, settings: settings };
    })
    .catch(error => {
      console.error('Error:', error);
      return { user: userId, error: error.message };
    });
}**/

async function getUserData(userId) {
  try {
    // Получаем данные пользователя
    const userResponse = await fetch(`/api/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error('User not found');
    }
    
    // Получаем посты пользователя
    const postsResponse = await fetch(`/api/users/${userId}/posts`);
    const posts = await postsResponse.json();
    
    // Получаем настройки пользователя
    const settingsResponse = await fetch(`/api/users/${userId}/settings`);
    const settings = await settingsResponse.json();
    
    return { user: userId, posts, settings };
  } catch (error) {
    console.error('Error:', error);
    return { user: userId, error: error.message };
  }
}