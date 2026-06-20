import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { signOutFunction } from "../firebase/Firebase";
import gearIcon from "../assets/gear-icon.png";

export const Header = () => {
  const { currentUser } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSignOut = async () => await signOutFunction();

  return (
    <div
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 60px",
        backgroundColor: "#8ecfca",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div>
            <img
              src={gearIcon}
              style={{ width: 24, height: 24 }}
              alt="gear icon"
            />
          </div>
          <p style={{ fontSize: 22, fontWeight: 700, color: "white" }}>
            Island City STEM
          </p>
        </div>
      </Link>

      <div style={{ display: "flex", gap: 30, fontWeight: 600 }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
        <Link
          to="/Projects-Events"
          style={{ textDecoration: "none", color: "white", fontWeight: 600 }}
        >
          Projects and Events
        </Link>
        <Link
          to="/Get-Involved"
          style={{ textDecoration: "none", color: "white", fontWeight: 600 }}
        >
          Get Involved
        </Link>
        <Link
          to="/interactive-map"
          style={{ textDecoration: "none", color: "white", fontWeight: 600 }}
        >
          Interactive Map
        </Link>
      </div>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#E8D5A3" }}>
            {currentUser?.displayName
              ? currentUser.displayName.slice(0, 1).toUpperCase()
              : "U"}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose} // ✅ fixed
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {currentUser ? (
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={() => navigate("/sign-in")}>Join us</MenuItem>
        )}
      </Menu>
    </div>
  );
};
