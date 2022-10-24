interface BlogContentUseParams {
  activeBlogId: string | number;
}

interface BlogIconProps {
  title: string;
  excursionIcon?: boolean;
  iconType: IconTypes;
}

interface BlogOverview {
  title: string;
  description: string;
}
