export function resolvePathIpfs(path?: string) {
  if (path === undefined) return null;

  if (!path.includes('ipfs://')) {
    return path;
  }
  return path.replace('ipfs://', 'https://gateway.ipfs.io/ipfs/');
}
