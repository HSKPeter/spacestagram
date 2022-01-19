export default function copyToClipboard(link: string) {
  navigator.clipboard.writeText(link);
}
