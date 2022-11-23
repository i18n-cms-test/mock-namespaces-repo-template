export default function getCustomPath({ namespace, language, repoConfig }) {
    const ext = FILE_TYPE_MAP_DATA[repoConfig.fileType].ext;
    switch (namespace) {
      case "common":
        return `src/locales/${language}.${ext}`;
      default:
        return `src/feature/${namespace}/locales/${language}.${ext}`;
    }
}