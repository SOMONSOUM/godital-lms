import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
  ScrollArea,
  Anchor,
  Grid,
  Button,
  Kbd,
  Avatar,
} from '@mantine/core';
import { Home, Users, Settings, Plus, Activity, School, Search, Box } from 'tabler-icons-react'

export default function AsideLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Grid align="center" h="100%" m={0}>
            <Grid.Col span={8} sm="content" p={0} order={2} orderSm={1}>
              <Anchor
                underline={false}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}>
                  <MediaQuery largerThan={768} styles={{ display: 'none' }}>
                    <School size={40} />
                  </MediaQuery>
                  <MediaQuery smallerThan={768} styles={{ display: 'none' }}>
                    <School size={40} />
                  </MediaQuery>
                  <Text>GODITAL LMS</Text>
                </div>
              </Anchor>
            </Grid.Col>
            <Grid.Col span={2} sm="auto" p={0} order={1} orderSm={2}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
            </Grid.Col>
            <Grid.Col span={2} sm="content" p={0} pr={8} order={3}>
              <MediaQuery smallerThan={768} styles={{ display: 'none' }}>
                <Avatar radius="xl" />
              </MediaQuery>
            </Grid.Col>
          </Grid>
        </Header>
      }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 250, lg: 300 }}
          aria-label="Main">
          <Navbar.Section>
            <NavLink
              icon={<Home />}
              label="Dashboard"
            // active={}
            />
          </Navbar.Section>
          <Navbar.Section>
            <NavLink
              icon={<Users />}
              childrenOffset={24}
              label="User"
            >
              <ScrollArea.Autosize scrollbarSize={10}>
                <NavLink
                  icon={<Plus />}
                  label="Create User"
                // active={location.pathname.startsWith('/create')}
                />
              </ScrollArea.Autosize>
            </NavLink>
          </Navbar.Section>
          <Navbar.Section>
            <NavLink
              icon={<Settings />}
              childrenOffset={24}
              label="Settings"
            >
              <ScrollArea.Autosize scrollbarSize={10}>
                <NavLink
                  icon={<Activity />}
                  label="Activity Logs"
                // active={location.pathname.startsWith('/logs')}
                />
              </ScrollArea.Autosize>
            </NavLink>
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}