import {
  Avatar,
  Box,
  Button,
  Grid2 as Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchUser } from "@/services/app.services";

interface User {
  name: string;
  greet: string;
  location: string;
  intro: string;
  totalExperience: number;
  // Add other properties as needed
}

function Profile() {
  const [user, setUser] = useState<User | null>(null);

  const getUserProfile = async () => {
    try {
      const response = await fetchUser();
      setUser(response);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      // Optionally set an error state here
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  if (!user) {
    return "Loading...";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* Avatar Section */}
          <Grid size={12}>
            <Avatar
              alt={user.name}
              src="https://avatars.githubusercontent.com/u/9712111?v=4"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #3f51b5",
              }}
            />
          </Grid>

          {/* Name Section */}
          <Grid size={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              {user.greet.replace(
                "{{%totalExperience%}}",
                user?.totalExperience.toString()
              )}
            </Typography>
          </Grid>

          {/* Email Section */}
          <Grid size={12}>
            <Typography variant="body1" color="textSecondary">
              {user.location}
            </Typography>
          </Grid>

          {/* Bio Section */}
          <Grid size={12}>
            <Typography variant="body2" color="textSecondary">
              {user.intro}
            </Typography>
          </Grid>

          {/* Edit Button */}
          <Grid size={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                padding: "10px 30px",
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Profile;
