import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function BasicTabs() {
  const [projectType, setProjectType] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProjectType(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={projectType} onChange={handleChange} aria-label="Project Tabs">
          <Tab label="Publications" {...a11yProps(0)} />
          <Tab label="Presentations" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={projectType} index={0}>
        Publications
      </TabPanel>
      <TabPanel value={projectType} index={1}>
        Presentations
      </TabPanel>
    </Box>
  );
}

export default BasicTabs