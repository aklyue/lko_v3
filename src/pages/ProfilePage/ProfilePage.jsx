import { Container } from "@mui/material";
import { ProfileInfo } from "../../widgets/profile/ProfileInfo";
import { Notifications } from "../../widgets/profile/Notifications";
import { News } from "../../widgets/profile/News";

function ProfilePage() {
  return (
    <Container sx={{ py: 2, maxWidth: 1200, boxShadow: 0 }}>
      <ProfileInfo />
      <Notifications />
      <News />
    </Container>
  );
}

export default ProfilePage;
