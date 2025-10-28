export interface NotificationItem {
  id: number;
  title: string;
  read: boolean;
}

export interface NotificationDrawerProps {
    heading: string;
    icon: string; 
    type?: "button" | "icon" | "link";
    content: React.ReactNode;
    tooltipContent: string; 
    showBadge?: boolean; 
    badgeContent?: number; 
    isClose?: boolean; 
    onCloseHandler?: () => void; 
  }
  
  
  
  
