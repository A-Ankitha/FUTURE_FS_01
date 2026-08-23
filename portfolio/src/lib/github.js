// Future-ready: GitHub integration.
// Not called anywhere yet — wire this into ProjectCard if/when you want
// live star counts or "last updated" badges instead of static data.
export async function fetchRepoStats(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!res.ok) throw new Error("Failed to fetch repo stats");
  const data = await res.json();
  return {
    stars: data.stargazers_count,
    updatedAt: data.pushed_at,
    description: data.description,
  };
}
