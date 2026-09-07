import { Box, List } from "@mui/material";
import {
  PersonOutlined,
  EmojiEventsOutlined,
  SchoolOutlined,
  AssignmentOutlined,
  DescriptionOutlined,
  MessageOutlined,
  SupportAgentOutlined,
  LogoutOutlined,
  WorkOutline,
} from "@mui/icons-material";
import NavButton from "../../../features/sidebar/sidebarButton/ui/NavButton";
import NavGroup from "../../../features/sidebar/sidebarAccordeon/ui/NavGroup";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 280,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FFFFFF",
        borderRight: "2px solid #F5F7F9",
      }}
    >
      <Box minWidth={280}>
        <Box
          sx={{
            height: 50,
            display: "flex",
            alignItems: "center",
            p: 2,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          LOGO
        </Box>
      </Box>
      <List sx={{ flexGrow: 1, mt: 8 }}>
        <NavButton
          icon={<PersonOutlined />}
          label="Мой профиль"
          to="/profile"
        />
        <NavButton icon={<WorkOutline />} label="Портфолио" to="/portfolio" />
        <NavButton
          icon={<EmojiEventsOutlined />}
          label="Достижения"
          to="/achievements"
        />
        <NavButton icon={<SchoolOutlined />} label="Обучение" to="/education" />

        <NavGroup icon={<AssignmentOutlined />} label="Успеваемость">
          <NavButton label="Зачетная книжка" to="/performance/gradebook" inset />
          <NavButton
            label="Результаты аттестации"
            to="/performance/assessment"
            inset
          />
          <NavButton label="Освоение программы" to="/performance/program" inset />
        </NavGroup>

        <NavButton
          icon={<DescriptionOutlined />}
          label="Заказать документы"
          to="/documents"
        />
        <NavButton
          icon={<MessageOutlined />}
          label="Сообщение преподавателю"
          to="/messages"
        />
      </List>

      <List>
        <NavButton
          icon={<SupportAgentOutlined />}
          label="Написать в поддержку"
          to="/support"
        />
        <NavButton icon={<LogoutOutlined />} label="Выйти" to="/logout" />
      </List>
    </Box>
  );
};

export default Sidebar;
