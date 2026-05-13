import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { signOutFunction } from "../firebase/Firebase";

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
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
      }}
    >
      <Link to="/">
        <p>Home</p>
      </Link>

      <div style={{ display: "flex", gap: 30 }}>
        <Link to="/" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Home
        </Link>
        <Link to="/blogs" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Blogs
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
          <Avatar sx={{ width: 32, height: 32 }}>
            {currentUser
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
        onClick={handleClick}
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
