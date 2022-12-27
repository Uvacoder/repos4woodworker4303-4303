const hiddenRepos = new Set([
  'unjs.github.io',
  'unjs.io',
  'website',
  'nitro-deploys',
  'template',
  'unkit',
  'rollup-plugin-node-deno',
  'renovate-config',
  ".github"
])

export default defineEventHandler(async () => {
  const { repos } = await $fetch('https://ungh.cc/orgs/woodworker4303/repos') as any
  return repos
    .filter((repo: any) => !hiddenRepos.has(repo.name))
    .sort((a: any, b: any) => b.stars - a.stars)
})
