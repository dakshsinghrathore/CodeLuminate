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
