import { useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const auth = useSelector((state) => state.user);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
        height="100vh"
      >
        <Typography
          sx={{
            fontFamily: "Monument Extended",
          }}
        >
          {auth.displayName}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Monument Extended",
          }}
        >
          {auth.userPrincipalName}
        </Typography>
        <Link
          to={`http://localhost:4000/login?login_hint=${auth?.userPrincipalName}`}
        >
          <Button
            sx={{
              textTransform: "none",
              display: "flex",
              gap: "12px",
              padding: "12px",
              height: "41px",
              border: "1px solid #8c8c8c",
            }}
          >
            <img
              src="assets/logo/microsoft.png"
              alt=""
              style={{
                width: "17px",
                height: "17px",
                object: "cover",
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontFamily: "Segoe UI",
                color: "#5e5e5e",
                fontSize: "15px",
              }}
            >
              Redirect with Microsoft
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Dashboard;
