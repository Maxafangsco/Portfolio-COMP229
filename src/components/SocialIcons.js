import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { iconMap } from "./Navlink";


  
  const SocialIcons = ({ social }) => {
    const DynamicIcon = iconMap[social.name];
  
    return (
      <Link to={social.href}>
        <Button key={social.id} sx={{ color: 'black', display: 'block' }}>
          <DynamicIcon />
        </Button>
      </Link>
    );
  };
  export default SocialIcons