export async function getUserData(username: string) {
  const accessToken = "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";
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; 
  }
}
