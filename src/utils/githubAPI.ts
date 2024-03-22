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
