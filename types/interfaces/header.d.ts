interface NavProps {
  homepageView?: boolean;
}

interface SearchBarProps {
  homepageView?: boolean;
  searchBoxActive: boolean;
  setSearchBoxActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SideMenuProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  inHeader?: boolean;
  homepageView?: boolean;
}
